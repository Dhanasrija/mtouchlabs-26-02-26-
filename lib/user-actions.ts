'use server';

import { sql } from '@/lib/db';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

// ===== AUTH =====

export async function loginUser(formData: FormData): Promise<void> {
  const email = (formData.get('email') as string || '').trim().toLowerCase();
  const password = formData.get('password') as string || '';

  if (!email || !password) {
    redirect('/admin?error=Please+enter+email+and+password');
  }

  try {
    const rows = await sql`
      SELECT id, name, email, password, role FROM admin_users
      WHERE LOWER(email) = ${email}
    `;

    if (rows.length === 0) {
      redirect('/admin?error=Invalid+email+or+password');
    }

    const user = rows[0];

    if (user.password !== password) {
      redirect('/admin?error=Invalid+email+or+password');
    }

    // Set cookies: user ID + role + name
    const cookieStore = await cookies();
    const maxAge = 60 * 60 * 24 * 7; // 7 days
    const opts = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      maxAge,
      path: '/',
    };

    cookieStore.set('admin_user_id', String(user.id), opts);
    cookieStore.set('admin_user_role', user.role, opts);
    cookieStore.set('admin_user_name', user.name, opts);
    cookieStore.set('admin_user_email', user.email, opts);
    // Keep old cookie for backward compat
    cookieStore.set('admin_auth', process.env.ADMIN_PASSWORD || 'authenticated', opts);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    if (msg.includes('NEXT_REDIRECT')) throw e; // re-throw redirect
    redirect('/admin?error=' + encodeURIComponent(msg));
  }

  redirect('/admin/dashboard');
}

export async function logoutUser(): Promise<void> {
  const cookieStore = await cookies();
  const opts = { path: '/', maxAge: 0 };
  cookieStore.set('admin_user_id', '', opts);
  cookieStore.set('admin_user_role', '', opts);
  cookieStore.set('admin_user_name', '', opts);
  cookieStore.set('admin_user_email', '', opts);
  cookieStore.set('admin_auth', '', opts);
  redirect('/admin');
}

// ===== GET CURRENT USER =====

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const id = cookieStore.get('admin_user_id')?.value;
  const role = cookieStore.get('admin_user_role')?.value;
  const name = cookieStore.get('admin_user_name')?.value;
  const email = cookieStore.get('admin_user_email')?.value;

  if (!id || !role) return null;
  return { id: Number(id), role, name: name || 'Admin', email: email || '' };
}

// ===== USER MANAGEMENT (Super Admin only) =====

export async function addUser(formData: FormData): Promise<void> {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'super_admin') {
    redirect('/admin/users?error=Only+Super+Admin+can+add+users');
  }

  const name = (formData.get('name') as string || '').trim();
  const email = (formData.get('email') as string || '').trim().toLowerCase();
  const password = formData.get('password') as string || '';
  const role = formData.get('role') as string || 'viewer';

  if (!name || !email || !password) {
    redirect('/admin/users?error=Name,+email+and+password+are+required');
  }

  try {
    await sql`
      INSERT INTO admin_users (name, email, password, role)
      VALUES (${name}, ${email}, ${password}, ${role})
    `;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    if (msg.includes('unique') || msg.includes('duplicate')) {
      redirect('/admin/users?error=A+user+with+this+email+already+exists');
    }
    redirect('/admin/users?error=' + encodeURIComponent(msg));
  }

  revalidatePath('/admin/users');
  redirect('/admin/users');
}

export async function updateUserRole(formData: FormData): Promise<void> {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'super_admin') {
    redirect('/admin/users?error=Only+Super+Admin+can+change+roles');
  }

  const userId = formData.get('user_id') as string;
  const newRole = formData.get('role') as string;

  // Don't let super admin demote themselves
  if (Number(userId) === currentUser.id) {
    redirect('/admin/users?error=Cannot+change+your+own+role');
  }

  try {
    await sql`UPDATE admin_users SET role = ${newRole} WHERE id = ${parseInt(userId)}`;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    redirect('/admin/users?error=' + encodeURIComponent(msg));
  }

  revalidatePath('/admin/users');
  redirect('/admin/users');
}

export async function deleteUser(formData: FormData): Promise<void> {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'super_admin') {
    redirect('/admin/users?error=Only+Super+Admin+can+delete+users');
  }

  const userId = formData.get('user_id') as string;

  // Don't let super admin delete themselves
  if (Number(userId) === currentUser.id) {
    redirect('/admin/users?error=Cannot+delete+your+own+account');
  }

  try {
    await sql`DELETE FROM admin_users WHERE id = ${parseInt(userId)}`;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    redirect('/admin/users?error=' + encodeURIComponent(msg));
  }

  revalidatePath('/admin/users');
  redirect('/admin/users');
}