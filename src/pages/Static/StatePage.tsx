import React from "react";
import { useParams } from "react-router-dom";
import { states } from "../../data/states";

const StatePage: React.FC = () => {
    const { stateSlug } = useParams<{ stateSlug: string }>();

    const state = states.find((s) => s.slug === stateSlug);

    if (!state) {
        return <h1>State not found</h1>;
    }

    return (
        <div>
            <h1>Designers in {state.name}</h1>
            <p>Find the best designers in {state.name}.</p>
        </div>
    );
};

export default StatePage;
