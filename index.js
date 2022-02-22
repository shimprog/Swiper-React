    const divRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [position, setPosition] = useState({
        startX: 0,
        scrollLeft: 0,
    });
    const mouseDown = (e) => {
        setIsDown(true);
        setPosition({
            startX: e.pageX - divRef.current.offsetLeft,
            scrollLeft: divRef.current.scrollLeft,
        });
    };
    const mouseUp = (e) => {
        setIsDown(false);
    };
    const mouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const eventPosition = e.pageX - divRef.current?.offsetLeft;
        const slide = eventPosition - position.startX;
        divRef.current.scrollLeft = position.scrollLeft - slide;
    };
    // Render
    <div ref={divRef} onMouseDown={mouseDown} onMouseLeave={mouseUp} onMouseUp={mouseUp} onMouseMove={mouseMove} />
