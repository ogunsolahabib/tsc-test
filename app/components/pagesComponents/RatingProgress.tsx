function RatingProgress({ progress, marker }: { progress: number, marker: number }) {
    // Ensure progress does not exceed 100%
    const progressWidth = Math.min(progress, 100);
    // Ensure marker does not exceed 100%
    const markerPosition = Math.min(marker, 100);

    return (
        <div className="relative w-full bg-tsc-mid-grey h-2">
            <div
                className="bg-tsc-tomato-pink h-2 transition-all"
                style={{ width: `${progressWidth}%` }}
            />
            <div
                className={`absolute w-6 h-6 rounded-full bg-tsc-pink -ml-4 top-0 bottom-0 my-auto transition-all`}
                style={{ left: `${markerPosition}%` }}
            />
        </div>
    );
}

export default RatingProgress;  