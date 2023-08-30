import PageTitle from '../Layouts/PageTitle'

export default function ComponentPage(props) {
    const {title, children} = props

    return (
        <>
            <PageTitle>{title}</PageTitle>
            <div className='mt-4'>
                {children}
            </div>
        </>
    )
}