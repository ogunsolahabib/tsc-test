'use client'

import { useEffect, useState } from 'react'
import styles from './index.module.css'

const Progress: React.FC<{ value: number }> = ({ value }) => {
    return <progress className={`${styles.progress} w-full bg-tsc-light-grey transition-all`} value={value} max="100"></progress>
}

export default Progress