function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <>
            {filters.map((filter) => (
                <button
                key={filter}
                className={`button button-${filter.toLowerCase()}`}
                onClick={onSelectFilter}
                >
                {filter}
                </button>
            ))}
        </>
    );
}

export default Toolbar