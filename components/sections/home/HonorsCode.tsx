import { CSSProperties } from "react";
import Link from "next/link";
import styles from "./HonorsCode.module.css";

type ImageConfig = {
    src: string;
    alt: string;
    width: string;
    height: string;
    targetTx: string;
    targetTy: string;
    zIndex: number;
    borderRadius?: string;
    isPrimary?: boolean;
    rangeStart: string;
    rangeEnd: string;
};

const IMAGES: ImageConfig[] = [
    // Southwest pair (Primary gets HUGE sizes and pushed to the far left)
    { src: "/images/home/honors/TopMobileappdevelopment.png", alt: "SW 1", width: "240px", height: "250px", targetTx: "-550px", targetTy: "240px", zIndex: 1, isPrimary: true, rangeStart: "contain 0%", rangeEnd: "contain 55%" },
    // { src: "/images/home/honors/Appdevelopment.png", alt: "SW 2", width: "240px", height: "260px", targetTx: "-250px", targetTy: "450px", zIndex: 2, rangeStart: "contain 25%", rangeEnd: "contain 65%" },

    // Northwest pair
    { src: "/images/home/honors/Awardwinningdesigners.png", alt: "NW 1", width: "220px", height: "240px", targetTx: "-650px", targetTy: "-60px", zIndex: 1, rangeStart: "contain 10%", rangeEnd: "contain 60%" },
    { src: "/images/home/honors/NascomInspire.png", alt: "NW 2", width: "220px", height: "220px", targetTx: "-390px", targetTy: "-190px", zIndex: 2, rangeStart: "contain 15%", rangeEnd: "contain 65%" },

    // Southeast pair
    { src: "/images/home/honors/Googlerating.png", alt: "SE 1", width: "220px", height: "220px", targetTx: "450px", targetTy: "200px", zIndex: 1, rangeStart: "contain 15%", rangeEnd: "contain 60%" },
    // { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60", alt: "SE 2", width: "240px", height: "240px", targetTx: "650px", targetTy: "450px", zIndex: 2, rangeStart: "contain 20%", rangeEnd: "contain 65%" },

    // Northeast pair
    { src: "/images/home/honors/Appdevelopment.png", alt: "NE 1", width: "220px", height: "220px", targetTx: "360px", targetTy: "-180px", zIndex: 2, rangeStart: "contain 25%", rangeEnd: "contain 70%" },
    { src: "/images/home/honors/OfficialNASSCOMMember.png", alt: "NE 2", width: "230px", height: "230px", targetTx: "600px", targetTy: "-50px", zIndex: 1, rangeStart: "contain 30%", rangeEnd: "contain 75%" },
];

export function HonorsCode() {
    return (
        <div className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.content}>
                    {/* Floating Pair Images */}
                    {IMAGES.map((img, idx) => {
                        const imageStyle = {
                            "--desktop-tx": img.targetTx,
                            "--desktop-ty": img.targetTy,
                            "--desktop-w": img.width,
                            "--desktop-h": img.height,
                            zIndex: img.zIndex,
                            borderRadius: img.borderRadius || "1.2rem",
                            ...(img.rangeStart && { animationRange: `${img.rangeStart} ${img.rangeEnd}` })
                        } as CSSProperties;

                        const className = img.isPrimary ? styles.floatingImagePrimary : styles.floatingImageSecondary;

                        return (
                            <div key={idx} className={className} style={imageStyle}>
                                <img src={img.src} alt={img.alt} />
                            </div>
                        );
                    })}

                    {/* Central Texts */}
                    <div className={styles.centerText}>
                        <h1 className={styles.mainHeading}>
                            <span className={styles.blueAwards}>Awards</span> <br /> & Recognition
                        </h1>
                        <p className={styles.subText}>
                            Industry awards that reflect our commitment to innovation, quality, and client success.
                        </p>

                        <Link href="/contact-us" className={styles.contactButton}>
                            Contact us <span className={styles.arrow}>↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
