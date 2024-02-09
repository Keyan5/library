import { useCallback, useEffect, useState } from "react";

const actionByKey = (key)=>{
    const actionKeyMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyD: 'moveRight',
        KeyA: 'moveLeft',
        Space: 'jump',
    }
    return actionKeyMap[key];
}

export const useKeyboard = ()=>{
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveRight: false,
        moveLeft: false,
        jump: false,
    });

    const handleKeyDown = useCallback((e)=>{
        const action = actionByKey(e.code);
        if(action)
            setActions((prev)=>({...prev,[action]:true}));
    },[]);

    const handleKeyUp = useCallback((e)=>{
        const action = actionByKey(e.code);
        if(action)
            setActions((prev)=>({...prev,[action]:false}));
    },[]);

    useEffect(()=>{
        document.addEventListener('keydown',handleKeyDown);
        document.addEventListener('keyup',handleKeyUp);
        return  ()=>{
            document.removeEventListener('keydown',handleKeyDown);
            document.removeEventListener('keyup',handleKeyUp);
        }
    },[handleKeyDown,handleKeyUp]);
    
    return actions;
}