import { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

export default function Terminal({ command = '', origin = '', displayContent = '', error = false, errorText = '' }) {
    const [path, setPath] = useState('');
    const [commandDone, setCommandDone] = useState(false);

    useEffect(() => {
        if (error) setPath(window.location.pathname);
    }, [error]);

    if (error && !path) return null;

    const resolvedCommand = error ? `cd ${path}` : command;

    return(
    <>
        <p className="terminal">
            me@philippemalo.dev:~$ <Typewriter
                    text={resolvedCommand}
                    showCursor={!commandDone}
                    onDone={() => {
                        setCommandDone(true);
                        if (error) return;
                        setTimeout(() => {
                            document.querySelector(origin).style.display = displayContent;
                        }, 300);
                    }}
                />
                {error && commandDone && (
                    <><br/>bash: cd: {path.replace(/^\//,'')}: {errorText}</>
                )}
        </p>
    </>
    )
}