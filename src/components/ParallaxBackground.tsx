import { Parallax } from "react-scroll-parallax";

export default function ParallaxBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            <Parallax
                speed={0}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%'
                }}
            >
                <div
                    className="w-full h-full bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: `url('/nebula.jpg')`,
                        backgroundAttachment: 'fixed'
                    }}
                />
            </Parallax>

            <Parallax
                speed={-7}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '110%'
                }}
            >
                <div
                    className="w-full h-full bg-repeat opacity-30"
                    style={{ backgroundImage: "url('/stars-small.png')" }}
                />
            </Parallax>

            <Parallax
                speed={-3}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '105%'
                }}
            >
                <div
                    className="w-full h-full bg-repeat opacity-40"
                    style={{ backgroundImage: "url('/stars-large.png')" }}
                />
            </Parallax>

            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d26] via-[#1a1a40] to-black opacity-70" />
        </div>
    );
}