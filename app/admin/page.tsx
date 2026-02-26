import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { loginUser } from '@/lib/user-actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Admin Login | mTouch Labs',
  robots: 'noindex, nofollow',
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error || '';

  // Check if already logged in
  const cookieStore = await cookies();
  const userId = cookieStore.get('admin_user_id')?.value;
  if (userId) {
    redirect('/admin/dashboard');
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',fontFamily:"'Inter',sans-serif",padding:20}}>
      <div style={{background:'#fff',borderRadius:16,padding:'40px 36px',maxWidth:420,width:'100%',boxShadow:'0 20px 60px rgba(0,0,0,0.3)'}}>
        <div style={{textAlign:'center',marginBottom:32}}>
          <div style={{width:56,height:56,background:'linear-gradient(135deg,#6366f1,#8b5cf6)',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontSize:24}}>🔒</div>
          <h1 style={{fontSize:24,fontWeight:700,color:'#111827',margin:'0 0 6px'}}>Admin Panel</h1>
          <p style={{fontSize:14,color:'#9ca3af',margin:0}}>Sign in with your admin credentials</p>
        </div>

        <form action={loginUser}>
          <div style={{marginBottom:20}}>
            <label style={{display:'block',fontSize:13,fontWeight:600,color:'#374151',marginBottom:6}}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="admin@mtouchlabs.com"
              required
              autoFocus
              autoComplete="email"
              style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e7eb',borderRadius:10,fontSize:15,fontFamily:"'Inter',sans-serif",outline:'none',boxSizing:'border-box',transition:'border-color 0.2s'}}
            />
          </div>

          <div style={{marginBottom:24}}>
            <label style={{display:'block',fontSize:13,fontWeight:600,color:'#374151',marginBottom:6}}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              style={{width:'100%',padding:'12px 14px',border: error ? '1px solid #ef4444' : '1px solid #e5e7eb',borderRadius:10,fontSize:15,fontFamily:"'Inter',sans-serif",outline:'none',boxSizing:'border-box'}}
            />
          </div>

          {error && (
            <div style={{background:'#fef2f2',border:'1px solid #fecaca',borderRadius:8,padding:'10px 14px',marginBottom:16,fontSize:13,color:'#dc2626'}}>
              {decodeURIComponent(error)}
            </div>
          )}

          <button type="submit" style={{width:'100%',padding:'13px 20px',background:'linear-gradient(135deg,#6366f1,#4f46e5)',color:'#fff',border:'none',borderRadius:10,fontSize:15,fontWeight:600,cursor:'pointer',fontFamily:"'Inter',sans-serif",transition:'opacity 0.2s'}}>
            Sign In
          </button>
        </form>

        <p style={{textAlign:'center',fontSize:12,color:'#d1d5db',marginTop:24}}>mTouch Labs &bull; Admin Panel</p>
      </div>
    </div>
  );
}