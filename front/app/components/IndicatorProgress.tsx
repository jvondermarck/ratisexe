import React from 'react'
import Image from 'next/image';
import ProgressBar from './ProgressBar';

interface IndicatorProgressProps {
    icon: string;
    color: string;
    value: number;
}

export default function IndicatorProgress({ icon, color, value }: IndicatorProgressProps) {

  const maxPercent = 100;
  const minPercent = 0;

  return (
    <div>
        <div className="flex flex-row gap-2">
            <Image src={icon} alt="Icon" width={30} height={30} style={{ width: 30, height: 30 }}/>
            <div className='w-48 h-8'>
                <ProgressBar value={value > maxPercent ? maxPercent : value < minPercent ? minPercent : value} />
            </div>
        </div>
    </div>
  )
}