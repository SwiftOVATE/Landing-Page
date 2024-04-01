import { useEffect, useRef, useState } from "react";

export function FadeInSection(props: any) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLDivElement>(null); // Add type annotation to useRef
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        if (domRef.current) { // Check if domRef.current is not null
            observer.observe(domRef.current);
        }
        return () => {
            if (domRef.current) { // Check if domRef.current is not null
                observer.unobserve(domRef.current);
            }
        };
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


export function MoveDownSection(props: any) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLDivElement>(null); // Add type annotation to useRef
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        if (domRef.current) { // Check if domRef.current is not null
            observer.observe(domRef.current);
        }
        return () => {
            if (domRef.current) { // Check if domRef.current is not null
                observer.unobserve(domRef.current);
            }
        };
    }, []);
    return (
        <div
            className={`move-down-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}