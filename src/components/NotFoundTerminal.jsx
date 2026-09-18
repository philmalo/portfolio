import { useEffect, useState } from 'react';
import Typewriter from './Typewriter'

export default function NotFoundTerminal() {
    const [path, setPath] = useState('');
    const [commandDone, setCommandDone] = useState(false);

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    if (!path) return null;

    const command = `me@philippemalo.dev:~$ cd ${path}`
    const error = `bash: cd: ${path.replace(/^\//,'')}: No such file or directory`

    return (
        <div className="terminal">
            <p>
                <Typewriter
                    text={command}
                    showCursor={!commandDone}
                    onDone={() => setTimeout(() => setCommandDone(true), 300)}
                />
            </p>
            {commandDone && <p>{error}</p>}
        </div>
    );
}
