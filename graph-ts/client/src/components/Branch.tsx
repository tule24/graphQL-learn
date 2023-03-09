type Props = {
    trunk: Boolean
}

const Branch = ({ trunk }: Props) => {
    return (
        <div className={`
        ${trunk ? 'w-24 -translate-x-24' : 'border-l-4 w-16 -translate-x-16'}
        scale-y-110 transition ease-in-out duration-300 group-hover:border-teal-400 h-full border-blue-500 border-b-4 absolute -translate-y-10
        `} />
    )
}

export default Branch