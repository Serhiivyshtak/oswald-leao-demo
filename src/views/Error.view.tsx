import type { JSX } from 'react';
import { getErrorMessage, type FallbackProps } from 'react-error-boundary';


export function ErrorView({ error }: FallbackProps): JSX.Element {
    return (
        <>
            <h1>
                Error occured: {getErrorMessage(error)}
            </h1>
        </>
    );
}