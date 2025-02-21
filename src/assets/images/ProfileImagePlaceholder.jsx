import { useTheme } from '@mui/material'
import React from 'react'

const ProfileImagePlaceholder = () => {
    const theme = useTheme()
    return (
        <>
            <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.2"
                    d="M29.042 14.436H24.9478C21.5903 14.436 18.8562 11.7018 18.8562 8.34433V4.25016C18.8562 3.471 18.2187 2.8335 17.4395 2.8335H11.4328C7.06949 2.8335 3.54199 5.66683 3.54199 10.7243V23.276C3.54199 28.3335 7.06949 31.1668 11.4328 31.1668H22.5678C26.9312 31.1668 30.4587 28.3335 30.4587 23.276V15.8527C30.4587 15.0735 29.8212 14.436 29.042 14.436Z"
                    fill="#414141"
                />
                <path
                    d="M22.3835 3.13103C21.8027 2.55019 20.7969 2.94686 20.7969 3.75436V8.69853C20.7969 10.7669 22.5535 12.481 24.6927 12.481C26.0385 12.4952 27.9085 12.4952 29.5094 12.4952C30.3169 12.4952 30.7419 11.546 30.1752 10.9794C28.1352 8.92519 24.4802 5.22769 22.3835 3.13103Z"
                    fill="#414141"
                    opacity="0.5"
                />
                <path
                    d="M16.3339 17.666L13.5005 14.8327C13.4864 14.8185 13.4722 14.8185 13.4722 14.8043C13.3872 14.7193 13.2739 14.6485 13.1605 14.5918C13.1464 14.5918 13.1464 14.5918 13.1322 14.5918C13.0189 14.5493 12.9055 14.5352 12.7922 14.521C12.7497 14.521 12.7214 14.521 12.6789 14.521C12.5939 14.521 12.4947 14.5493 12.4097 14.5777C12.3672 14.5918 12.3389 14.606 12.3105 14.6202C12.1972 14.6768 12.0839 14.7335 11.9989 14.8327L9.16555 17.666C8.75471 18.0768 8.75471 18.7568 9.16555 19.1677C9.57638 19.5785 10.2564 19.5785 10.6672 19.1677L11.6872 18.1477V24.0835C11.6872 24.6643 12.1689 25.146 12.7497 25.146C13.3305 25.146 13.8122 24.6643 13.8122 24.0835V18.1477L14.8322 19.1677C15.0447 19.3802 15.3139 19.4793 15.583 19.4793C15.8522 19.4793 16.1214 19.3802 16.3339 19.1677C16.7447 18.7568 16.7447 18.0768 16.3339 17.666Z"
                    fill="#414141"
                    opacity="0.5"
                />
            </svg>
        </>
    )
}

export default ProfileImagePlaceholder
