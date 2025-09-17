import { useState, type ChangeEvent } from 'react'

export default function Quiz() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    if(status === 'success') {
        return <h1 style={{ color: 'green' }}>A resposta está correta! ✨</h1>   
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus('submitting');
        try {
        await submitForm(answer);
        setStatus('success');
        } catch (err: unknown) {
        setStatus('typing');
        setError(err);
        }
    }

    function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(e.target.value);
    }

    return (
        <>
        <h2>City quiz</h2>
        <p>
            Em qual cidade existe um outdoor que transforma ar em água potável?
        </p>

        <form onSubmit={handleSubmit}>
            <textarea 
                value={answer} 
                onChange={handleTextareaChange}
                disabled={status === 'submitting'}
            />
            <br />
            <button disabled={
                answer.length === 0 ||
                status === 'submitting'
            }>
                Submit
            </button>

            {error !== null &&
                <p style={{ color: 'red' }}>
                    {error.message}
                </p>
            }
        </form>
        </>
    )


    function submitForm(answer: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if(shouldError) {
                    reject(new Error('Boa tentativa, mas a resposta está incorreta. Tente novamente!'))
                } else {
                    resolve()
                }
            }, 1500)
        })
    }
}