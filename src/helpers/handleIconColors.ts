export const handleColors = (iconName:string) => {
    switch (iconName) {
        case 'React.js':
                return 'hover:text-[#61dafb] hover:fill-[#61dafb]'
        case 'Next.js':
            return 'hover:text-[#000000] hover:fill-[#000000]'
        case 'Javascript':
            return 'hover:text-[#f7df1e] hover:fill-[#f7df1e]'
        case 'Typescript':
            return 'hover:text-[#1976d2] hover:fill-[#1976d2]'
        case 'Tailwind CSS':
            return 'hover:text-[#06b6d4] hover:fill-[#06b6d4]'
        case 'Redux Toolkit':
            return 'hover:text-[#764ABC] hover:fill-[#764ABC]'
        case 'Jest':
            return 'hover:text-[#99425b] hover:fill-[#99425b]'
        case 'Cypress':
            return 'hover:text-[#4a4a4d] hover:fill-[#4a4a4d]'
        case 'Material UI':
            return 'hover:text-[#00b0ff] hover:fill-[#00b0ff]'
        default:
    }
}