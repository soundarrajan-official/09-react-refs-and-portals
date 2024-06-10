const ResultModal = ({ result, targetTime }) => {
    return (
        <dialog className="result-modal" open>
            <h1>You {result}</h1>
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default ResultModal;
