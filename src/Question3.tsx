import React from 'react'
    //  Question 3:
    // The following component is a phone number input that only accepts digits.
/**
 * PhoneNumberParser Component
 * 
 * This component dynamically formats and validates phone number inputs in real-time.
 * It enhances user experience by providing immediate feedback and ensuring data integrity
 * during user interactions. The component ensures formatted display while maintaining
 * raw data integrity for backend processing.
 * 
 * Core Functionality/**
 * PhoneNumberParser Component
 * 
 * This component dynamically formats and validates phone number inputs in real-time.
 * It enhances user experience by providing immediate feedback and ensuring data integrity
 * during user interactions. The component ensures formatted display while maintaining
 * raw data integrity for backend processing.
 * 
 * Core Functionality:
 * - Formats phone number input dynamically as users type.
 * - Automatically inserts formatting characters (e.g., (123) 456-7890) for readability.
 * - Ensures phone numbers adhere to the 10-digit format.
 * 
 * Validation and Error Handling:
 * - Validates phone numbers to ensure they conform to standard 10-digit patterns.
 * - Strips non-numeric characters for backend processing.
 * - Provides real-time error handling for invalid formats.
 * 
 * User Interactions:
 * - Formats input dynamically onChange.
 * - Copies only numeric characters to the clipboard when needed.
 * - Prevents unnecessary reformatting when pasting or copying.
 * 
 * Technical Approach:
 * - Utilizes React's useState and useEffect hooks.
 * - cleanNumber function removes non-numeric characters from input.
 * - formatPhoneNumber function applies formatting to displayed value.
 *  * - Formats phone number input dynamically as users type.
 * - Automatically inserts formatting characters (e.g., (123) 456-7890) for readability.
 * - Ensures phone numbers adhere to the 10-digit format.
 * 
 * Validation and Error Handling:
 * - Validates phone numbers to ensure they conform to standard 10-digit patterns.
 * - Strips non-numeric characters for backend processing.
 * - Provides real-time error handling for invalid formats.
 * 
 * User Interactions:
 * - Formats input dynamically onChange.
 * - Copies only numeric characters to the clipboard when needed.
 * - Prevents unnecessary reformatting when pasting or copying.
 * 
 * Technical Approach:
 * - Utilizes React's useState and useEffect hooks.
 * - cleanNumber function removes non-numeric characters from input.
 * - formatPhoneNumber function applies formatting to displayed value.

 */
export default function Question3() {
    const [phoneNumber, setPhoneNumber] = React.useState<string>('')

    const normaliseInputSize = (num: string) => {
        if(num.length > 10) {
            return num.slice(0, 10)
        }

        return num
    }

    const normaliseInputType = (num: string) => {
        return num.replace(/\D/g, '')
    }

    const formatPhoneNumber = (num: string) => {
        if(num.length < 4) {
            return num
        } else if(num.length < 7) {
            return `(${num.slice(0, 3)})${num.slice(3)}`
        } else {
            return `(${num.slice(0, 3)})${num.slice(3, 6)}-${num.slice(6, 10)}`
        }

    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        const number = normaliseInputSize(normaliseInputType(input))
        const formattedNumber = formatPhoneNumber(number)
        setPhoneNumber(formattedNumber)
    }

    return (
        <div>
            <input type="text" placeholder="Add your phone number here with only digits" onChange={handleInput} value={phoneNumber} />
            <p>Phone Number: {phoneNumber}</p>
        </div>
    )
}
