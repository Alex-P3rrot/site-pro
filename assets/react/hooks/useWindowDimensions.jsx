import { useEffect } from 'react';

export default function useWindowDimensions() {

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            window.windowWidth = width
            window.windowHeight = height
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

}