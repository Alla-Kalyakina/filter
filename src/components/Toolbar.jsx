function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <>
            {filters.map((filter) => (
                <button
                key={filter}
                className={filter === selected ? `button button-${filter.toLowerCase()} active` : `button button-${filter.toLowerCase()}`}
                onClick={onSelectFilter}
                >
                {filter}
                </button>
            ))}

        </>
    );
}

export default Toolbar