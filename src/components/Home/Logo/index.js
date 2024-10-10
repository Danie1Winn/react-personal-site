import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
/*import LogoS from '../../../assets/images/logo-s.svg'*/
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import './index.scss';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20
            })
        
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )

    
    },[])

    return (
        <div className='logo-container' ref={bgRef}>
            {/*<img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="D" />*/}
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container"
                transform="translate(0 457) scale(0.1 -0.1)"
                fill="none"
                >
                <path
                    ref={outlineLogoRef}
                    d="M 1507.78,757.16
           C 1318.34,700.91 1123.79,675.99 924.13,682.38
             892.72,1013.50 860.29,1343.78 826.85,1673.23
             755.51,1673.23 684.18,1673.23 612.84,1673.23
             638.84,1273.76 671.26,874.92 710.12,476.73
             886.22,470.99 1061.32,480.34 1235.41,504.77
             1375.45,543.30 1466.24,627.43 1507.78,757.16 Z
           M 1974.71,420.64
           C 2057.75,466.12 2125.84,528.44 2178.99,607.60
             2398.19,1024.46 2398.19,1441.99 2178.99,1860.18
             1986.19,2119.69 1723.54,2272.38 1391.05,2318.22
             982.54,2327.57 573.98,2330.69 165.37,2327.57
             179.84,2259.91 186.32,2191.37 184.83,2121.92
             529.15,2128.70 872.86,2119.36 1215.96,2093.88
             1729.90,2017.52 2031.46,1733.98 2120.63,1243.24
             2170.86,951.17 2122.22,676.98 1974.71,420.64 Z
           M 1974.71,420.64
           C 2122.22,676.98 2170.86,951.17 2120.63,1243.24
             2031.46,1733.98 1729.90,2017.52 1215.96,2093.88
             872.86,2119.36 529.15,2128.70 184.83,2121.92
             119.97,2121.92 55.12,2121.92 -9.73,2121.92
             -9.73,2103.22 -9.73,2084.53 -9.73,2065.83
             55.38,1389.84 113.74,710.58 165.37,28.04
             581.30,19.76 996.34,29.11 1410.51,56.09
             1646.16,112.97 1834.22,234.49 1974.71,420.64 Z
           M 1507.78,757.16
           C 1676.86,1336.11 1449.88,1641.47 826.85,1673.23
             860.29,1343.78 892.72,1013.50 924.13,682.38
             1123.79,675.99 1318.34,700.91 1507.78,757.16 Z"
                />
                </g>
            </svg>
        </div>
    )
}

export default Logo