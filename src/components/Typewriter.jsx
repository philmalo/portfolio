import { useEffect, useState } from 'react';

export default function Typewriter({ text, onDone, speedMs = [30, 40], showCursor = true }) {
    const [typed, setTyped] = useState('');
    const [done, setDone] = useState(false);

    const delay = Math.random() * (speedMs[1] - speedMs[0]) + 10;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                const char = text.charAt(index)
                setTyped((t) => t + char);
                index++;
            } else {
                clearInterval(interval);
                setDone(true);
                onDone?.();
            }
        }, delay);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className={ showCursor ? `code${!done ? ' paused' : ''}` : undefined }>
            {typed}
        </span>
    );
}