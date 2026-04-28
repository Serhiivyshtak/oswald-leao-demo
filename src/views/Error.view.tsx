import type { JSX } from 'react';
import { getErrorMessage, type FallbackProps } from 'react-error-boundary';


export default function ErrorView({ error }: FallbackProps): JSX.Element {
    return (
        <>
            <h1>
                Error occured: {getErrorMessage(error)}
            </h1>
        </>
    );
}