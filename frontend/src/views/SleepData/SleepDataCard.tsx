import React from 'react';

interface IProps {
    title: string,
    value: string,
}
const SleepDataCard: React.FC<IProps> = ({
    title, value
}) => {
    return <div className='w-full h-16 my-5 bg-white rounded-md shadow-lg flex justify-between items-center px-5'>
        <p>{title}</p>
        <p>{value}</p>
    </div>
};

export default SleepDataCard;