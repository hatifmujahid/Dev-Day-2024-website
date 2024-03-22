import react, { useState, useCallback } from 'react'
import Image1 from '../assets/heroSection2a.png'
import Image2 from '../assets/cup.svg'
import Image3 from '../assets/arrow3.png'
import Image4 from '../assets/image4.svg'
import Arrow1 from '../assets/arrow1fin.png'
import Circle1 from '../assets/circle1.png'
import Arrow2 from '../assets/arrow2.png'
import '../components/herosection2.css'
import svg1 from '../assets/svg1.svg'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectGroup,
} from './ui/select'
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from './ui/card'
import { useDropzone } from 'react-dropzone'
import Footer from './Footer'


function UploadCloudIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
        </svg>
    )
}


const InputBox = ({ label, name, type, value, handleChange, isRequired }) => {
    const isNumber = type === 'number'
    const maxLength = type === 'cnic' ? 15 : isNumber ? 12 : undefined

    const formatValue = (inputValue) => {
        // Remove all non-numeric characters if the input is a number
        let result = inputValue
        if (type === 'number') {
            result = inputValue.replace(/\D/g, '').substring(0, maxLength)
            if (result.length > 4) {
                result = `${result.slice(0, 4)}-${result.slice(4)}`
            }
        }

        if (type === 'cnic') {
            result = inputValue.replace(/\D/g, '').substring(0, maxLength)
            if (result.length > 5) {
                // Check if there are at least 5 digits
                if (result.length === 13) {
                    // Check if there are exactly 13 digits
                    result = `${result.slice(0, 5)}-${result.slice(
                        5,
                        12
                    )}-${result.slice(12)}`
                } else {
                    result = `${result.slice(0, 5)}-${result.slice(5)}`
                }
            }
        }

        return result
    }

    const transformedClass = value ? '-translate-y-8 ml-3 scale-75' : ''

    return (
        <div className="w-full">
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type={isNumber ? 'tel' : type}
                    name={name}
                    id={name}
                    className="block py-3 px-4 w-full text-lg text-white bg-gray-900 rounded-lg bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#003149] peer"
                    placeholder=" "
                    required={isRequired}
                    value={formatValue(value)} // Format the value based on the input type
                    onChange={(e) => handleChange(name, e.target.value)}
                    {...(isNumber && {
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    })}
                    maxLength={maxLength}
                />

                <label
                    className={`z-0 peer-focus:font-medium text-md absolute text-[#23B6DF] duration-300 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#23B6DF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 ml-3 ${transformedClass}`}
                >
                    {label}
                </label>
            </div>
        </div>
    )
}

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [competitionType, setCompetitionType] = useState('')
    const [competition, setCompetition] = useState('')

    const [error, setError] = useState({
        competition: false,
        competitionType: false,
        teamName: false,
        member1: false,
        cnic1: false,
        email1: false,
        phone1: false,
        file: false,
    })

    const [files, setFiles] = useState(null)

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/png, image/jpeg',
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles[0])
        },
    })

    const csCompetitions = [
        'Capture The Flag',
        'Speed Programming',
        'Database Design',
        'Code in the Dark',
        'PsuedoWar',
        'Speed Debugging',
        'UI/UX',
        'Data Visualization',
        'Web Development',
        'Data Science',
        'App Development',
        'SyncOS',
    ]

    const generalCompetitions = [
        'Photography',
        'Reels competition',
        'Board games',
        'Sketching',
        'Podium game',
        'Scavenger hunt',
        'FSX',
        'Battlestation',
    ]

    let competitionOptions = competitionType === 'CS Competitions' ? csCompetitions : generalCompetitions

    const competitionTypes = [
        'CS Competitions',
        'Esports Competitions',
        'General Competitions',
    ]

    const handleCompetitionChange = (e) => {
        setCompetition(e.target.value)
    }

    const handleCompetitionTypeChange = (e) => {
        setCompetitionType(e.target.value)
    }

    const [teamName, setTeamName] = useState('')
    const [member1, setMember1] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [email3, setEmail3] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [phone3, setPhone3] = useState('')
    const [cnic1, setCnic1] = useState('')
    const [cnic2, setCnic2] = useState('')
    const [cnic3, setCnic3] = useState('')
    const [referenceCode, setReferenceCode] = useState('')

    const handleInput = (name, value) => {
        console.log(name, value);

        if (name === 'competitionType') {
            setCompetitionType(value);
            setCompetition('');
        }
        const setters = {
            member1: setMember1,
            member2: setMember2,
            member3: setMember3,
            email1: setEmail1,
            email2: setEmail2,
            email3: setEmail3,
            phone1: setPhone1,
            phone2: setPhone2,
            phone3: setPhone3,
            cnic1: setCnic1,
            cnic2: setCnic2,
            cnic3: setCnic3,
            teamName: setTeamName,
            referenceCode: setReferenceCode,
        };
    
        const setter = setters[name];
        if (setter) {
            setter(value);
        }
    };
    
    const handleSubmit = async () => {
        
        if (competition === '' || competitionType === '') {
            alert('Please select a competition')
            setError({ ...error, competition: true, competitionType: true })
            return
        }

        if (member1 === '' || email1 === '' || phone1 === '' || cnic1 === '') {
            alert('Please fill in the required fields')
            setError({
                ...error,
                member1: true,
                email1: true,
                phone1: true,
                cnic1: true,
            })
            return
        }

        setCnic1((cnic) => cnic.replace(/-/g, ''))
        setCnic2((cnic) => cnic.replace(/-/g, ''))
        setCnic3((cnic) => cnic.replace(/-/g, ''))

        console.log(cnic1)
        setPhone1((e) => e.replace(/-/g, ''))
        setPhone2((e) => e.replace(/-/g, ''))
        setPhone3((e) => e.replace(/-/g, ''))

        const participantData = {
            Competition: competition,
            Competition_type: competitionType,
            Team_Name: teamName,
            Leader_name: member1,
            Leader_email: email1,
            Leader_whatsapp_number: phone1,
            Leader_cnic: cnic1,
            mem1_name: member2,
            mem1_email: email2,
            mem1_whatsapp_number: phone2,
            mem1_cnic: cnic2,
            mem2_name: member3,
            mem2_email: email3,
            mem2_whatsapp_number: phone3,
            mem2_cnic: cnic3,
            reference_code: referenceCode,
            
        }

        try {
            const reader = new FileReader()
            reader.readAsDataURL(files)
            reader.onload = async () => {
                const base64Image = reader.result
                participantData.image = base64Image

                setLoading(true)
                const response = await fetch(
                    'http://localhost:5000/addParticipant',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(participantData),
                    }
                )

                if (response.ok) {
                    const result = await response.json()
                    console.log('Submitted successfully:', result)
                    alert('Form submitted successfully')

                    setMember1('')
                    setMember2('')
                    setMember3('')
                    setEmail1('')
                    setEmail2('')
                    setEmail3('')
                    setPhone1('')
                    setPhone2('')
                    setPhone3('')
                    setCompetition('')
                    setCompetitionType('')
                    setTeamName('')
                } else {
                    console.log(response)
                    throw new Error('Failed to submit form')
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setLoading(false)
            setError({
                competition: false,
                competitionType: false,
                teamName: false,
                member1: false
            })
        }
    }

    return (
        <div className="bg-[#03071C]">
            <div className="bg-[#03071C] flex justify-center items-center flex-col">
                <div className=" part1 flex justify-space-evenly items-center xl:flex lg:flex sm:inline-block md:inline-block       sm:text-center md:text-center mt-16">
                    <div className="mt-12">
                        <h1 className="mainh1 text-[#23B6DF] font-extrabold  text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-600 sm:mb-8 md:mb-8">
                            REGISTER NOW!
                        </h1>
                        <div className="scale-75 part2 mt-16 hidden sm:flex md:flex lg:inline xl:inline 2xl:inline">
                            <img src={Arrow1} alt="" className="" />
                        </div>
                    </div>
                </div>

                <div className="lg:hidden  mb-8 flex justify-center gap-2 z-0">
                    <div className="relative top-10">
                        <div className="flex flex-col  gap-4">
                            <div class="flex justify-center ">
                                <svg
                                    width="115"
                                    height="115"
                                    viewBox="0 0 231 231"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M86 69.375L111.125 61.875H124.25V150H105.25V81.375L90 85.125L86 69.375ZM163.734 150H143.484V130H163.734V150Z"
                                        fill="white"
                                    />
                                    <circle
                                        cx="115.5"
                                        cy="115.5"
                                        r="113"
                                        stroke="#23B6DF"
                                        stroke-width="5"
                                        stroke-dasharray="10 10"
                                    />
                                </svg>
                            </div>

                            <p className="p-4 text-center text-white">
                                Select the department of competitions you wish
                                to participate in, for more information click
                                here!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="part3 hero1 flex justify-space-evenly items-start mt-6  xl:flex lg:flex sm:inline md:inline">
                    <div className="sm:inline md:inline  m-4">
                        <h2 className="mainh1 font-extrabold text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-600 sm:text-center md:text-center text-[#23B6DF] ">
                            Competitions
                        </h2>
                        <br />

                        <div className="text-start mb-16 md:mb-22 ">
                            {competitionTypes.map((type) => {
                                return (
                                    <>
                                        <input
                                            type="radio"
                                            id={type}
                                            name="options"
                                            value={type}
                                            className="form-radio h-5 w-5 sm:h-12 sm:w-8 md:h-8 md:w-8 lg:h-5 lg:w-5 xl:h-5 xl:w-5 text-indigo-600"
                                            onChange={
                                                handleCompetitionTypeChange
                                            }
                                        />
                                        <label
                                            for={type}
                                            className={`font-medium sm:text-4xl md:text-4xl text-xl ${
                                                type === competitionType
                                                    ? 'text-[#23B6DF]'
                                                    : 'text-gray-500'
                                            } ml-2`}
                                        >
                                            {type}
                                        </label>
                                        <br />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <img
                        src={Arrow2}
                        alt=""
                        className="hidden  lg:inline xl:inline 2xl:inline scale-75"
                    />
                </div>
                {/* <div className="hidden sm:inline md:inline lg:hidden xl:hidden 2xl:hidden box1 sm:m-auto md:m-auto">
          <div className="w-80 flex flex-col items-center ml-60">
            <h1 className="circle text-8xl font-bold">2.</h1>
            <p className="text-center font-semimedium text-5xl text-600 mb-16">
              Select the competition you wish to participate in!
            </p>
          </div>
        </div> */}
                <div className="lg:hidden  min-h-[310px] flex justify-center gap-2 z-0">
                    <div className="relative top-10">
                        <div className="flex flex-col  gap-4">
                            <div class="flex justify-center ">
                                <svg
                                    width="115"
                                    height="115"
                                    viewBox="0 0 231 231"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M109.625 78.5C102.875 78.5 98.25 82.25 91.75 90.25L78.25 79.375C86.875 67.625 95.25 61.25 110.875 61.25C129.5 61.25 141 72 141 88.375C141 103 133.5 110.375 118 122.375L103.75 133.375H141.875V150H77.125V134.75L106.25 110.875C117.125 101.875 121.375 97.125 121.375 89.875C121.375 82.5 116.5 78.5 109.625 78.5ZM176.881 150H156.631V130H176.881V150Z"
                                        fill="white"
                                    />
                                    <circle
                                        cx="115.5"
                                        cy="115.5"
                                        r="113"
                                        stroke="#23B6DF"
                                        stroke-width="5"
                                        stroke-dasharray="10 10"
                                    />
                                </svg>
                            </div>

                            <p className=" p-4 text-center text-white">
                                Select the competition you wish to participate
                                in!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto  w-[900.21px] relative z-10 bg-[#03071C] ">
                <h1 className="text-center text-2xl font-bold mb-4 text-[#23B6DF]">
                    SELECT A COMPETITION
                </h1>
                <div className="flex border justify-center mx-6">
                    <Select 
                        className="bg-slate-800 border-none text-white"
                        onValueChange={(value) =>
                            setCompetition(value)
                        }    
                    >
                        
                        <SelectTrigger
                            aria-label="Social Media Activity"
                            className="bg-slate-900 text-white focus:ring-0"
                        >
                            <SelectValue
                                placeholder="Select Competition"
                                className="text-white"
                            />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 text-white border-0 focus:ring-0">
                            <SelectGroup>
                                <SelectLabel>Select Competition</SelectLabel>
                                {competitionOptions.map((comp) => {
                                    return (
                                        <SelectItem
                                            value={comp}
                                            className="hover:bg-slate-500"
                                        >
                                            {comp}
                                        </SelectItem>
                                    )
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="absolute inset-y-0 end-1 right-8 top-12 flex items-center pointer-events-none">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 41 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.4485 34.7642L40.0663 0.785213H0.830776L20.4485 34.7642Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex lg:max-h-[505px] lg:items-center lg:flex-col z-0 lg:-mt-[110px] bg-[#03071C] scale-75">
                <img src={svg1} alt="" />
            </div>

            <div className="lg:hidden  min-h-[310px] flex justify-center gap-2 z-0 bg-[#03071C] ">
                <div className="relative top-10">
                    <div className="flex flex-col  gap-4">
                        <div class="flex justify-center ">
                            <svg
                                width="115"
                                height="115"
                                viewBox="0 0 231 231"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M115.25 79H80.875V62.5H140V77L117.875 98.125C129.875 100.125 141.375 106.375 141.375 122.75C141.375 139.375 129.375 151.5 109.875 151.5C94.125 151.5 83.25 145.25 75.75 136.375L89 123.75C95 130.5 101.25 134.25 110.125 134.25C117.375 134.25 122.5 130.125 122.5 123.5C122.5 116.25 116.375 112.25 105.375 112.25H97.375L94.375 100L115.25 79ZM176.637 150H156.387V130H176.637V150Z"
                                    fill="white"
                                />
                                <circle
                                    cx="115.5"
                                    cy="115.5"
                                    r="113"
                                    stroke="#23B6DF"
                                    stroke-width="5"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        <p className=" p-4 text-center text-white">
                            Enter your team’s accurate information here.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex bg-[#03071C]  flex-col items-center gap-20  mb-12 mt-[-55px]">
                <div className="flex flex-center justify-start w-[240px] sm:w-[400px] md:w-[600px] lg:w-[75%]">
                    <h1 className="text-5xl font-bold text-white w-full ">
                        Team Information
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[65%] mx-auto">
                <InputBox
                    label="Team Name"
                    name="teamName"
                    type="text"
                    value={teamName}
                    isRequired={true}
                    handleChange={handleInput}
                />
            </div>

            <div className="flex bg-[#03071C]  flex-col items-center gap-20 ">
                <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%] ">
                    <h1 className="text-3xl font-bold text-[#23B6DF]">
                        Team Leader
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
                        <InputBox
                            label="Full Name"
                            name="member1"
                            type="text"
                            value={member1}
                            isRequired={true}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="CNIC Number"
                            name="cnic1"
                            type="cnic"
                            value={cnic1}
                            isRequired={true}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="Email Address"
                            name="email1"
                            type="email"
                            value={email1}
                            isRequired={true}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="WhatsApp Number"
                            name="phone1"
                            type="number"
                            value={phone1}
                            isRequired={true}
                            handleChange={handleInput}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%]">
                    <h1 className="text-3xl font-bold text-[#23B6DF]">
                        Member 1
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
                        <InputBox
                            label="Full Name"
                            name="member2"
                            type="text"
                            value={member2}
                            isRequired={false}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="CNIC Number"
                            name="cnic2"
                            type="cnic"
                            value={cnic2}
                            isRequired={false}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="Email Address"
                            name="email2"
                            type="email"
                            value={email2}
                            isRequired={false}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="WhatsApp Number"
                            name="phone2"
                            type="number"
                            value={phone2}
                            isRequired={true}
                            handleChange={handleInput}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-[270px] sm:w-[450px] md:w-[600px] lg:w-[75%]">
                    <h1 className="text-3xl font-bold text-[#23B6DF]">
                        Member 2
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
                        <InputBox
                            label="Full Name"
                            name="member3"
                            type="text"
                            value={member3}
                            isRequired={false}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="CNIC Number"
                            name="cnic3"
                            type="cnic"
                            value={cnic3}
                            isRequired={false}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="Email Address"
                            name="email3"
                            type="email"
                            value={email3}
                            isRequired={false}
                            handleChange={handleInput}
                        />
                        <InputBox
                            label="WhatsApp Number"
                            name="phone3"
                            type="number"
                            value={phone3}
                            isRequired={true}
                            handleChange={handleInput}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[65%] mx-auto">
                    <InputBox
                        label="Reference Code (if any)"
                        name="referenceCode"
                        type="text"
                        value={referenceCode}
                        isRequired={false}
                        handleChange={handleInput}
                    />
                </div>

                <Card className="bg-gray-900 border-gray-700 w-full  md:w-4/6 mx-auto">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Upload Image
                            <span className="text-red-700">
                                {error.file && ' *'}{' '}
                            </span>
                        </CardTitle>
                        <CardDescription>
                            Drag and drop your image or click the button below
                            to select file.
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        {...getRootProps()}
                        className={`flex flex-col items-center justify-center border-2 m-1  ${
                            isDragActive
                                ? 'border-blue-500'
                                : 'border-zinc-500 dark:border-zinc-800'
                        } border-dashed rounded-lg space-y-3`}
                    >
                        <input {...getInputProps()} />

                        {isDragActive ? (
                            <p className="text-blue-500">
                                Drop the file here...
                            </p>
                        ) : (
                            <>
                                <UploadCloudIcon className="w-16 h-16 text-zinc-500 dark:text-zinc-400 " />
                                <p className="text-gray-500 ">
                                    Drag & drop image here, or click to
                                    select image
                                </p>
                            </>
                        )}

                        {files && files.type && files.name && (
                            <div className="relative">
                                <img
                                    src={
                                        files.type.startsWith('image/')
                                            ? URL.createObjectURL(files)
                                            : ''
                                    }
                                    alt={files.name}
                                    className="rounded-md"
                                />
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="lg:hidden  mb-2 flex justify-center gap-2 z-0">
                    <div className="">
                        <div className="flex flex-col  gap-4">
                            <div class="flex justify-center ">
                                <svg
                                    width="115"
                                    height="115"
                                    viewBox="0 0 231 231"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M122.875 61.875H139.125V115.5H150.875V131.125H139.125V150H120.75V131.125H78L74.875 117.5L122.875 61.875ZM120.75 115.5V88.25L97.5 115.5H120.75ZM185.182 150H164.932V130H185.182V150Z"
                                        fill="white"
                                    />
                                    <circle
                                        cx="115.5"
                                        cy="115.5"
                                        r="113"
                                        stroke="#23B6DF"
                                        stroke-width="5"
                                        stroke-dasharray="10 10"
                                    />
                                </svg>
                            </div>

                            <p className=" p-4 text-center text-white">
                                Review your information and click submit to
                                proceed for payment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 w-[300px] md:w-[500px] lg:w-2/3 z-10 mb-5 lg:mb-0">
                    <div className="hidden lg:block col-span-2"></div>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`py-4 border min-h-10 font-medium text-[#003149] transition-all shadow-[5px_5px_0px_black]  hover:bg- hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]`}
                    >
                        <h1 className="text-2xl font-bold">
                            {loading ? 'Submitting...' : 'SUBMIT'}
                        </h1>
                    </button>
                </div>
            </div>
            <div className="hidden lg:flex lg:ml-[250px] relative top-[-150px] z-0">
                <svg
                    width="1000"
                    height="400"
                    viewBox="0 0 1243 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M328.48 203L324.205 195.325H320.505V203H318.905V185.275H325.08C328.255 185.275 330.355 187.475 330.355 190.325C330.355 192.9 328.63 194.875 325.93 195.225L330.33 203H328.48ZM320.505 193.9H324.83C327.18 193.9 328.755 192.475 328.755 190.325C328.755 188.15 327.18 186.7 324.83 186.7H320.505V193.9ZM333.779 196.075H341.729C341.679 193.85 340.254 192.1 337.754 192.1C335.529 192.1 333.929 193.875 333.779 196.075ZM341.904 199.15L343.229 199.625C342.554 201.65 340.754 203.325 338.004 203.325C334.854 203.325 332.204 201 332.204 197C332.204 193.25 334.754 190.75 337.729 190.75C341.254 190.75 343.279 193.25 343.304 196.775C343.304 196.975 343.304 197.125 343.279 197.325H333.729V197.425C333.754 200.175 335.654 201.975 338.004 201.975C340.154 201.975 341.404 200.725 341.904 199.15ZM355.743 191.075L351.018 203H349.443L344.718 191.075H346.418L350.218 201.3L354.068 191.075H355.743ZM359.968 203H358.468V191.075H359.968V203ZM357.968 186.125C357.968 185.4 358.518 184.875 359.218 184.875C359.918 184.875 360.468 185.4 360.468 186.125C360.468 186.85 359.918 187.375 359.218 187.375C358.518 187.375 357.968 186.85 357.968 186.125ZM364.711 196.075H372.661C372.611 193.85 371.186 192.1 368.686 192.1C366.461 192.1 364.861 193.875 364.711 196.075ZM372.836 199.15L374.161 199.625C373.486 201.65 371.686 203.325 368.936 203.325C365.786 203.325 363.136 201 363.136 197C363.136 193.25 365.686 190.75 368.661 190.75C372.186 190.75 374.211 193.25 374.236 196.775C374.236 196.975 374.236 197.125 374.211 197.325H364.661V197.425C364.686 200.175 366.586 201.975 368.936 201.975C371.086 201.975 372.336 200.725 372.836 199.15ZM384.197 191.075H385.822L389.372 201.15L392.497 191.075H394.122L390.222 203H388.547L384.997 192.9L381.447 203H379.772L375.822 191.075H377.472L380.647 201.15L384.197 191.075ZM404.519 207.75H402.894L405.869 201.45L400.794 191.075H402.469L406.644 199.875L410.594 191.075H412.244L404.519 207.75ZM419.428 203.325C416.103 203.325 413.503 200.775 413.503 197.05C413.503 193.3 416.078 190.775 419.428 190.775C422.753 190.775 425.353 193.3 425.353 197.05C425.353 200.775 422.753 203.325 419.428 203.325ZM415.028 197.05C415.028 200.15 417.078 201.975 419.428 201.975C421.778 201.975 423.828 200.15 423.828 197.05C423.828 193.925 421.778 192.125 419.428 192.125C417.078 192.125 415.028 193.925 415.028 197.05ZM436.587 201.15C436.037 202.3 434.712 203.325 432.837 203.325C429.812 203.325 428.387 201.075 428.387 198.575V191.075H429.887V198.325C429.887 200.225 430.762 201.975 433.112 201.975C435.237 201.975 436.487 200.35 436.487 198.35V191.075H437.987V200.725C437.987 201.625 438.062 202.475 438.137 203H436.712C436.662 202.75 436.587 202.075 436.587 201.325V201.15ZM448.088 191.05V192.625C447.813 192.55 447.438 192.5 447.038 192.5C445.013 192.5 443.513 193.8 443.513 196.525V203H442.013V191.075H443.488V193.3C444.213 191.65 445.588 190.925 447.163 190.925C447.563 190.925 447.888 190.975 448.088 191.05ZM457.82 203H456.32V191.075H457.82V203ZM455.82 186.125C455.82 185.4 456.37 184.875 457.07 184.875C457.77 184.875 458.32 185.4 458.32 186.125C458.32 186.85 457.77 187.375 457.07 187.375C456.37 187.375 455.82 186.85 455.82 186.125ZM463.313 195.875V203H461.813V191.075H463.263V192.975C463.913 191.7 465.313 190.775 467.138 190.775C469.938 190.775 471.363 192.775 471.363 195.225V203H469.863V195.475C469.863 193.6 468.938 192.125 466.638 192.125C464.588 192.125 463.313 193.85 463.313 195.875ZM480.843 192.425H477.518V203H476.018V192.425H473.568V191.075H476.018V188.6C476.018 186.075 477.568 184.75 479.568 184.75C480.193 184.75 480.643 184.875 480.918 185V186.35C480.693 186.25 480.318 186.15 479.793 186.15C478.593 186.15 477.518 186.775 477.518 188.675V191.075H480.843V192.425ZM488.007 203.325C484.682 203.325 482.082 200.775 482.082 197.05C482.082 193.3 484.657 190.775 488.007 190.775C491.332 190.775 493.932 193.3 493.932 197.05C493.932 200.775 491.332 203.325 488.007 203.325ZM483.607 197.05C483.607 200.15 485.657 201.975 488.007 201.975C490.357 201.975 492.407 200.15 492.407 197.05C492.407 193.925 490.357 192.125 488.007 192.125C485.657 192.125 483.607 193.925 483.607 197.05ZM503.191 191.05V192.625C502.916 192.55 502.541 192.5 502.141 192.5C500.116 192.5 498.616 193.8 498.616 196.525V203H497.116V191.075H498.591V193.3C499.316 191.65 500.691 190.925 502.266 190.925C502.666 190.925 502.991 190.975 503.191 191.05ZM507.039 203H505.539V191.075H507.014V193.05C507.539 191.8 508.964 190.75 510.814 190.75C512.664 190.75 514.089 191.775 514.564 193.45C515.289 191.725 516.764 190.75 518.664 190.75C520.989 190.75 522.789 192.35 522.789 195.1V203H521.289V195.275C521.289 193.475 520.239 192.075 518.239 192.075C516.264 192.075 514.914 193.725 514.914 195.675V203H513.414V195.275C513.414 193.475 512.389 192.075 510.364 192.075C508.389 192.075 507.039 193.7 507.039 195.675V203ZM529.682 203.3C527.182 203.3 525.782 201.65 525.782 199.925C525.782 197.9 527.182 196.725 529.357 196.4L532.532 195.925C533.557 195.775 533.782 195.325 533.782 194.775C533.782 193.2 532.732 192.075 530.782 192.075C528.882 192.075 527.632 193.125 527.432 194.85L526.032 194.55C526.307 192.275 528.207 190.775 530.757 190.775C533.857 190.775 535.282 192.65 535.282 194.925V200.95C535.282 201.9 535.357 202.5 535.457 203H533.982C533.932 202.725 533.832 201.925 533.832 200.95C533.282 202.075 531.857 203.3 529.682 203.3ZM529.857 202.025C532.132 202.025 533.782 200.525 533.782 198.125V196.775C533.707 196.85 533.382 197 532.907 197.075L529.582 197.575C528.182 197.775 527.307 198.55 527.307 199.85C527.307 200.95 528.207 202.025 529.857 202.025ZM541.46 187.3V191.075H544.56V192.425H541.46V199.625C541.46 201.075 542.135 201.775 543.485 201.775C543.91 201.775 544.335 201.675 544.56 201.575V202.9C544.36 203 543.81 203.125 543.085 203.125C541.16 203.125 539.96 201.95 539.96 199.775V192.425H537.435V191.075H538.335C539.51 191.075 540.01 190.55 540.01 189.325V187.3H541.46ZM548.738 203H547.238V191.075H548.738V203ZM546.738 186.125C546.738 185.4 547.288 184.875 547.988 184.875C548.688 184.875 549.238 185.4 549.238 186.125C549.238 186.85 548.688 187.375 547.988 187.375C547.288 187.375 546.738 186.85 546.738 186.125ZM557.831 203.325C554.506 203.325 551.906 200.775 551.906 197.05C551.906 193.3 554.481 190.775 557.831 190.775C561.156 190.775 563.756 193.3 563.756 197.05C563.756 200.775 561.156 203.325 557.831 203.325ZM553.431 197.05C553.431 200.15 555.481 201.975 557.831 201.975C560.181 201.975 562.231 200.15 562.231 197.05C562.231 193.925 560.181 192.125 557.831 192.125C555.481 192.125 553.431 193.925 553.431 197.05ZM568.44 195.875V203H566.94V191.075H568.39V192.975C569.04 191.7 570.44 190.775 572.265 190.775C575.065 190.775 576.49 192.775 576.49 195.225V203H574.99V195.475C574.99 193.6 574.065 192.125 571.765 192.125C569.715 192.125 568.44 193.85 568.44 195.875ZM589.862 203.3C587.362 203.3 585.962 201.65 585.962 199.925C585.962 197.9 587.362 196.725 589.537 196.4L592.712 195.925C593.737 195.775 593.962 195.325 593.962 194.775C593.962 193.2 592.912 192.075 590.962 192.075C589.062 192.075 587.812 193.125 587.612 194.85L586.212 194.55C586.487 192.275 588.387 190.775 590.937 190.775C594.037 190.775 595.462 192.65 595.462 194.925V200.95C595.462 201.9 595.537 202.5 595.637 203H594.162C594.112 202.725 594.012 201.925 594.012 200.95C593.462 202.075 592.037 203.3 589.862 203.3ZM590.037 202.025C592.312 202.025 593.962 200.525 593.962 198.125V196.775C593.887 196.85 593.562 197 593.087 197.075L589.762 197.575C588.362 197.775 587.487 198.55 587.487 199.85C587.487 200.95 588.387 202.025 590.037 202.025ZM600.837 195.875V203H599.337V191.075H600.787V192.975C601.437 191.7 602.837 190.775 604.662 190.775C607.462 190.775 608.887 192.775 608.887 195.225V203H607.387V195.475C607.387 193.6 606.462 192.125 604.162 192.125C602.112 192.125 600.837 193.85 600.837 195.875ZM613.44 197.025C613.44 199.825 615.04 201.975 617.565 201.975C620.04 201.975 621.615 199.825 621.615 197.025C621.615 194.2 620.04 192.1 617.59 192.1C615.09 192.1 613.44 194.15 613.44 197.025ZM621.615 201.125V200.65C621.09 201.875 619.765 203.325 617.44 203.325C614.09 203.325 611.94 200.575 611.94 197.025C611.94 193.525 614.14 190.75 617.44 190.75C619.99 190.75 621.165 192.3 621.59 193.325V184.95H623.09V200.725C623.09 202 623.19 202.875 623.215 203H621.74C621.69 202.7 621.615 201.975 621.615 201.125ZM638.615 192.1C636.24 192.1 634.265 193.975 634.265 197.05C634.265 200.075 636.215 201.975 638.615 201.975C640.915 201.975 642.09 200.375 642.49 199.05L643.815 199.6C643.24 201.45 641.49 203.325 638.615 203.325C635.24 203.325 632.765 200.7 632.765 197.05C632.765 193.375 635.265 190.75 638.615 190.75C641.465 190.75 643.165 192.5 643.715 194.5L642.39 195.05C641.99 193.65 640.915 192.1 638.615 192.1ZM648.323 203H646.823V184.95H648.323V203ZM653.816 203H652.316V191.075H653.816V203ZM651.816 186.125C651.816 185.4 652.366 184.875 653.066 184.875C653.766 184.875 654.316 185.4 654.316 186.125C654.316 186.85 653.766 187.375 653.066 187.375C652.366 187.375 651.816 186.85 651.816 186.125ZM662.834 192.1C660.459 192.1 658.484 193.975 658.484 197.05C658.484 200.075 660.434 201.975 662.834 201.975C665.134 201.975 666.309 200.375 666.709 199.05L668.034 199.6C667.459 201.45 665.709 203.325 662.834 203.325C659.459 203.325 656.984 200.7 656.984 197.05C656.984 193.375 659.484 190.75 662.834 190.75C665.684 190.75 667.384 192.5 667.934 194.5L666.609 195.05C666.209 193.65 665.134 192.1 662.834 192.1ZM680.867 191.075L675.792 196.15L680.967 203H679.092L674.742 197.175L672.542 199.35V203H671.042V184.95H672.542V197.375L678.792 191.075H680.867ZM688.914 199.875L690.289 199.4C690.514 200.85 691.614 202.025 693.564 202.025C695.039 202.025 696.214 201.15 696.214 199.9C696.214 198.8 695.464 198.2 694.189 197.9L692.264 197.45C690.514 197.05 689.339 196 689.339 194.275C689.339 192.35 691.189 190.775 693.364 190.775C696.139 190.775 697.314 192.425 697.639 193.85L696.314 194.35C696.089 193.2 695.264 192.075 693.364 192.075C692.014 192.075 690.814 192.925 690.814 194.175C690.814 195.2 691.464 195.8 692.689 196.075L694.589 196.5C696.564 196.95 697.689 198.075 697.689 199.8C697.689 201.575 696.189 203.325 693.539 203.325C690.614 203.325 689.139 201.45 688.914 199.875ZM708.95 201.15C708.4 202.3 707.075 203.325 705.2 203.325C702.175 203.325 700.75 201.075 700.75 198.575V191.075H702.25V198.325C702.25 200.225 703.125 201.975 705.475 201.975C707.6 201.975 708.85 200.35 708.85 198.35V191.075H710.35V200.725C710.35 201.625 710.425 202.475 710.5 203H709.075C709.025 202.75 708.95 202.075 708.95 201.325V201.15ZM715.851 203H714.376V184.95H715.876V193.375C716.401 192.2 717.801 190.75 720.201 190.75C723.526 190.75 725.601 193.475 725.601 197.025C725.601 200.575 723.476 203.325 720.151 203.325C717.851 203.325 716.476 201.95 715.851 200.675V203ZM719.976 201.975C722.426 201.975 724.101 199.925 724.101 197.025C724.101 194.15 722.426 192.1 719.976 192.1C717.526 192.1 715.851 194.15 715.851 197.025C715.851 199.925 717.526 201.975 719.976 201.975ZM730.305 203H728.805V191.075H730.28V193.05C730.805 191.8 732.23 190.75 734.08 190.75C735.93 190.75 737.355 191.775 737.83 193.45C738.555 191.725 740.03 190.75 741.93 190.75C744.255 190.75 746.055 192.35 746.055 195.1V203H744.555V195.275C744.555 193.475 743.505 192.075 741.505 192.075C739.53 192.075 738.18 193.725 738.18 195.675V203H736.68V195.275C736.68 193.475 735.655 192.075 733.63 192.075C731.655 192.075 730.305 193.7 730.305 195.675V203ZM751.423 203H749.923V191.075H751.423V203ZM749.423 186.125C749.423 185.4 749.973 184.875 750.673 184.875C751.373 184.875 751.923 185.4 751.923 186.125C751.923 186.85 751.373 187.375 750.673 187.375C749.973 187.375 749.423 186.85 749.423 186.125ZM757.842 187.3V191.075H760.942V192.425H757.842V199.625C757.842 201.075 758.517 201.775 759.867 201.775C760.292 201.775 760.717 201.675 760.942 201.575V202.9C760.742 203 760.192 203.125 759.467 203.125C757.542 203.125 756.342 201.95 756.342 199.775V192.425H753.817V191.075H754.717C755.892 191.075 756.392 190.55 756.392 189.325V187.3H757.842ZM411.845 222.3V226.075H414.945V227.425H411.845V234.625C411.845 236.075 412.52 236.775 413.87 236.775C414.295 236.775 414.72 236.675 414.945 236.575V237.9C414.745 238 414.195 238.125 413.47 238.125C411.545 238.125 410.345 236.95 410.345 234.775V227.425H407.82V226.075H408.72C409.895 226.075 410.395 225.55 410.395 224.325V222.3H411.845ZM422.724 238.325C419.399 238.325 416.799 235.775 416.799 232.05C416.799 228.3 419.374 225.775 422.724 225.775C426.049 225.775 428.649 228.3 428.649 232.05C428.649 235.775 426.049 238.325 422.724 238.325ZM418.324 232.05C418.324 235.15 420.374 236.975 422.724 236.975C425.074 236.975 427.124 235.15 427.124 232.05C427.124 228.925 425.074 227.125 422.724 227.125C420.374 227.125 418.324 228.925 418.324 232.05ZM439.802 242.75H438.302V226.075H439.777V228.45C440.352 227.225 441.752 225.75 444.127 225.75C447.502 225.75 449.527 228.5 449.527 232.025C449.527 235.575 447.427 238.325 444.077 238.325C441.777 238.325 440.402 236.95 439.802 235.75V242.75ZM448.027 232.025C448.027 229.225 446.377 227.1 443.877 227.1C441.402 227.1 439.777 229.25 439.777 232.025C439.777 234.85 441.402 236.975 443.877 236.975C446.377 236.975 448.027 234.825 448.027 232.025ZM458.806 226.05V227.625C458.531 227.55 458.156 227.5 457.756 227.5C455.731 227.5 454.231 228.8 454.231 231.525V238H452.731V226.075H454.206V228.3C454.931 226.65 456.306 225.925 457.881 225.925C458.281 225.925 458.606 225.975 458.806 226.05ZM465.936 238.325C462.611 238.325 460.011 235.775 460.011 232.05C460.011 228.3 462.586 225.775 465.936 225.775C469.261 225.775 471.861 228.3 471.861 232.05C471.861 235.775 469.261 238.325 465.936 238.325ZM461.536 232.05C461.536 235.15 463.586 236.975 465.936 236.975C468.286 236.975 470.336 235.15 470.336 232.05C470.336 228.925 468.286 227.125 465.936 227.125C463.586 227.125 461.536 228.925 461.536 232.05ZM480.07 227.1C477.695 227.1 475.72 228.975 475.72 232.05C475.72 235.075 477.67 236.975 480.07 236.975C482.37 236.975 483.545 235.375 483.945 234.05L485.27 234.6C484.695 236.45 482.945 238.325 480.07 238.325C476.695 238.325 474.22 235.7 474.22 232.05C474.22 228.375 476.72 225.75 480.07 225.75C482.92 225.75 484.62 227.5 485.17 229.5L483.845 230.05C483.445 228.65 482.37 227.1 480.07 227.1ZM489.028 231.075H496.978C496.928 228.85 495.503 227.1 493.003 227.1C490.778 227.1 489.178 228.875 489.028 231.075ZM497.153 234.15L498.478 234.625C497.803 236.65 496.003 238.325 493.253 238.325C490.103 238.325 487.453 236 487.453 232C487.453 228.25 490.003 225.75 492.978 225.75C496.503 225.75 498.528 228.25 498.553 231.775C498.553 231.975 498.553 232.125 498.528 232.325H488.978V232.425C489.003 235.175 490.903 236.975 493.253 236.975C495.403 236.975 496.653 235.725 497.153 234.15ZM502.407 231.075H510.357C510.307 228.85 508.882 227.1 506.382 227.1C504.157 227.1 502.557 228.875 502.407 231.075ZM510.532 234.15L511.857 234.625C511.182 236.65 509.382 238.325 506.632 238.325C503.482 238.325 500.832 236 500.832 232C500.832 228.25 503.382 225.75 506.357 225.75C509.882 225.75 511.907 228.25 511.932 231.775C511.932 231.975 511.932 232.125 511.907 232.325H502.357V232.425C502.382 235.175 504.282 236.975 506.632 236.975C508.782 236.975 510.032 235.725 510.532 234.15ZM515.711 232.025C515.711 234.825 517.311 236.975 519.836 236.975C522.311 236.975 523.886 234.825 523.886 232.025C523.886 229.2 522.311 227.1 519.861 227.1C517.361 227.1 515.711 229.15 515.711 232.025ZM523.886 236.125V235.65C523.361 236.875 522.036 238.325 519.711 238.325C516.361 238.325 514.211 235.575 514.211 232.025C514.211 228.525 516.411 225.75 519.711 225.75C522.261 225.75 523.436 227.3 523.861 228.325V219.95H525.361V235.725C525.361 237 525.461 237.875 525.486 238H524.011C523.961 237.7 523.886 236.975 523.886 236.125ZM541.17 227.425H537.845V238H536.345V227.425H533.895V226.075H536.345V223.6C536.345 221.075 537.895 219.75 539.895 219.75C540.52 219.75 540.97 219.875 541.245 220V221.35C541.02 221.25 540.645 221.15 540.12 221.15C538.92 221.15 537.845 221.775 537.845 223.675V226.075H541.17V227.425ZM548.334 238.325C545.009 238.325 542.409 235.775 542.409 232.05C542.409 228.3 544.984 225.775 548.334 225.775C551.659 225.775 554.259 228.3 554.259 232.05C554.259 235.775 551.659 238.325 548.334 238.325ZM543.934 232.05C543.934 235.15 545.984 236.975 548.334 236.975C550.684 236.975 552.734 235.15 552.734 232.05C552.734 228.925 550.684 227.125 548.334 227.125C545.984 227.125 543.934 228.925 543.934 232.05ZM563.518 226.05V227.625C563.243 227.55 562.868 227.5 562.468 227.5C560.443 227.5 558.943 228.8 558.943 231.525V238H557.443V226.075H558.918V228.3C559.643 226.65 561.018 225.925 562.593 225.925C562.993 225.925 563.318 225.975 563.518 226.05ZM573.25 242.75H571.75V226.075H573.225V228.45C573.8 227.225 575.2 225.75 577.575 225.75C580.95 225.75 582.975 228.5 582.975 232.025C582.975 235.575 580.875 238.325 577.525 238.325C575.225 238.325 573.85 236.95 573.25 235.75V242.75ZM581.475 232.025C581.475 229.225 579.825 227.1 577.325 227.1C574.85 227.1 573.225 229.25 573.225 232.025C573.225 234.85 574.85 236.975 577.325 236.975C579.825 236.975 581.475 234.825 581.475 232.025ZM589.203 238.3C586.703 238.3 585.303 236.65 585.303 234.925C585.303 232.9 586.703 231.725 588.878 231.4L592.053 230.925C593.078 230.775 593.303 230.325 593.303 229.775C593.303 228.2 592.253 227.075 590.303 227.075C588.403 227.075 587.153 228.125 586.953 229.85L585.553 229.55C585.828 227.275 587.728 225.775 590.278 225.775C593.378 225.775 594.803 227.65 594.803 229.925V235.95C594.803 236.9 594.878 237.5 594.978 238H593.503C593.453 237.725 593.353 236.925 593.353 235.95C592.803 237.075 591.378 238.3 589.203 238.3ZM589.378 237.025C591.653 237.025 593.303 235.525 593.303 233.125V231.775C593.228 231.85 592.903 232 592.428 232.075L589.103 232.575C587.703 232.775 586.828 233.55 586.828 234.85C586.828 235.95 587.728 237.025 589.378 237.025ZM600.686 242.75H599.061L602.036 236.45L596.961 226.075H598.636L602.811 234.875L606.761 226.075H608.411L600.686 242.75ZM612.361 238H610.861V226.075H612.336V228.05C612.861 226.8 614.286 225.75 616.136 225.75C617.986 225.75 619.411 226.775 619.886 228.45C620.611 226.725 622.086 225.75 623.986 225.75C626.311 225.75 628.111 227.35 628.111 230.1V238H626.611V230.275C626.611 228.475 625.561 227.075 623.561 227.075C621.586 227.075 620.236 228.725 620.236 230.675V238H618.736V230.275C618.736 228.475 617.711 227.075 615.686 227.075C613.711 227.075 612.361 228.7 612.361 230.675V238ZM632.729 231.075H640.679C640.629 228.85 639.204 227.1 636.704 227.1C634.479 227.1 632.879 228.875 632.729 231.075ZM640.854 234.15L642.179 234.625C641.504 236.65 639.704 238.325 636.954 238.325C633.804 238.325 631.154 236 631.154 232C631.154 228.25 633.704 225.75 636.679 225.75C640.204 225.75 642.229 228.25 642.254 231.775C642.254 231.975 642.254 232.125 642.229 232.325H632.679V232.425C632.704 235.175 634.604 236.975 636.954 236.975C639.104 236.975 640.354 235.725 640.854 234.15ZM646.858 230.875V238H645.358V226.075H646.808V227.975C647.458 226.7 648.858 225.775 650.683 225.775C653.483 225.775 654.908 227.775 654.908 230.225V238H653.408V230.475C653.408 228.6 652.483 227.125 650.183 227.125C648.133 227.125 646.858 228.85 646.858 230.875ZM661.089 222.3V226.075H664.189V227.425H661.089V234.625C661.089 236.075 661.764 236.775 663.114 236.775C663.539 236.775 663.964 236.675 664.189 236.575V237.9C663.989 238 663.439 238.125 662.714 238.125C660.789 238.125 659.589 236.95 659.589 234.775V227.425H657.064V226.075H657.964C659.139 226.075 659.639 225.55 659.639 224.325V222.3H661.089ZM666.417 236.8C666.417 236.075 666.992 235.475 667.717 235.475C668.467 235.475 669.042 236.075 669.042 236.8C669.042 237.525 668.467 238.1 667.717 238.1C666.992 238.1 666.417 237.525 666.417 236.8Z"
                        fill="black"
                    />
                    <path
                        d="M122.875 230.875H139.125V284.5H150.875V300.125H139.125V319H120.75V300.125H78L74.875 286.5L122.875 230.875ZM120.75 284.5V257.25L97.5 284.5H120.75ZM185.182 319H164.932V299H185.182V319Z"
                        fill="#003149"
                    />
                    <circle
                        cx="115.5"
                        cy="284.5"
                        r="113"
                        stroke="black"
                        strokeWidth="5"
                        strokeDasharray="10 10"
                    />
                    <path
                        className="hidden xl:block"
                        d="M1193 294.51L1193 293.51L1193 293.51L1193 294.51ZM1228 259.51L1229 259.51L1228 259.51ZM1227.29 173.293C1227.68 172.902 1228.32 172.902 1228.71 173.293L1235.07 179.657C1235.46 180.047 1235.46 180.681 1235.07 181.071C1234.68 181.462 1234.05 181.462 1233.66 181.071L1228 175.414L1222.34 181.071C1221.95 181.462 1221.32 181.462 1220.93 181.071C1220.54 180.681 1220.54 180.047 1220.93 179.657L1227.29 173.293ZM1229 174L1229 179.344L1227 179.344L1227 174L1229 174ZM1229 190.033L1229 200.722L1227 200.722L1227 190.033L1229 190.033ZM1229 211.411L1229 222.099L1227 222.1L1227 211.411L1229 211.411ZM1229 232.788L1229 243.477L1227 243.477L1227 232.788L1229 232.788ZM1229 254.166L1229 259.51L1227 259.51L1227 254.166L1229 254.166ZM1229 259.51C1229 261.103 1228.9 262.672 1228.7 264.211L1226.71 263.952C1226.9 262.499 1227 261.016 1227 259.51L1229 259.51ZM1226.27 273.291C1225.05 276.218 1223.47 278.95 1221.56 281.427L1219.98 280.208C1221.77 277.868 1223.27 275.288 1224.42 272.525L1226.27 273.291ZM1214.92 288.072C1212.44 289.976 1209.71 291.564 1206.78 292.778L1206.01 290.931C1208.78 289.785 1211.36 288.284 1213.7 286.486L1214.92 288.072ZM1197.7 295.206C1196.16 295.407 1194.59 295.51 1193 295.51L1193 293.51C1194.51 293.51 1195.99 293.412 1197.44 293.223L1197.7 295.206ZM1193 295.51L1188.04 295.51L1188.04 293.51L1193 293.51L1193 295.51ZM1178.11 295.51L1168.19 295.51L1168.19 293.51L1178.11 293.51L1178.11 295.51ZM1158.26 295.51L1148.34 295.51L1148.34 293.51L1158.26 293.51L1158.26 295.51ZM1138.41 295.51L1128.48 295.51L1128.48 293.51L1138.41 293.51L1138.41 295.51ZM1118.56 295.51L1108.63 295.51L1108.63 293.51L1118.56 293.51L1118.56 295.51ZM1098.71 295.51L1088.78 295.51L1088.78 293.51L1098.71 293.51L1098.71 295.51ZM1078.86 295.51L1068.93 295.51L1068.93 293.51L1078.86 293.51L1078.86 295.51ZM1059.01 295.51L1049.08 295.51L1049.08 293.51L1059.01 293.51L1059.01 295.51ZM1039.15 295.51L1029.23 295.51L1029.23 293.51L1039.15 293.51L1039.15 295.51ZM1019.3 295.51L1009.38 295.51L1009.38 293.51L1019.3 293.51L1019.3 295.51ZM999.452 295.51L989.527 295.51L989.527 293.51L999.452 293.51L999.452 295.51ZM979.601 295.51L969.676 295.51L969.676 293.51L979.601 293.51L979.601 295.51ZM959.75 295.51L949.824 295.51L949.824 293.51L959.75 293.51L959.75 295.51ZM939.899 295.51L929.973 295.51L929.973 293.51L939.899 293.51L939.899 295.51ZM920.048 295.51L910.122 295.51L910.122 293.51L920.048 293.51L920.048 295.51ZM900.197 295.51L890.271 295.51L890.271 293.51L900.197 293.51L900.197 295.51ZM880.346 295.51L870.42 295.51L870.42 293.51L880.346 293.51L880.346 295.51ZM860.495 295.51L850.569 295.51L850.569 293.51L860.495 293.51L860.495 295.51ZM840.644 295.51L830.718 295.51L830.718 293.51L840.644 293.51L840.644 295.51ZM820.792 295.51L810.867 295.51L810.867 293.51L820.792 293.51L820.792 295.51ZM800.941 295.51L791.016 295.51L791.016 293.51L800.941 293.51L800.941 295.51ZM781.09 295.51L771.165 295.51L771.165 293.51L781.09 293.51L781.09 295.51ZM761.239 295.51L751.314 295.51L751.314 293.51L761.239 293.51L761.239 295.51ZM741.388 295.51L731.463 295.51L731.463 293.51L741.388 293.51L741.388 295.51ZM721.537 295.51L711.612 295.51L711.612 293.51L721.537 293.51L721.537 295.51ZM701.686 295.51L691.761 295.51L691.76 293.51L701.686 293.51L701.686 295.51ZM681.835 295.51L671.909 295.51L671.909 293.51L681.835 293.51L681.835 295.51ZM661.984 295.51L652.058 295.51L652.058 293.51L661.984 293.51L661.984 295.51ZM642.133 295.51L632.207 295.51L632.207 293.51L642.133 293.51L642.133 295.51ZM622.282 295.51L612.356 295.51L612.356 293.51L622.282 293.51L622.282 295.51ZM602.431 295.51L592.505 295.51L592.505 293.51L602.431 293.51L602.431 295.51ZM582.58 295.51L572.654 295.51L572.654 293.51L582.58 293.51L582.58 295.51ZM562.729 295.51L552.803 295.51L552.803 293.51L562.729 293.51L562.729 295.51ZM542.877 295.51L532.952 295.51L532.952 293.51L542.877 293.51L542.877 295.51ZM523.026 295.51L513.101 295.51L513.101 293.51L523.026 293.51L523.026 295.51ZM503.175 295.51L493.25 295.51L493.25 293.51L503.175 293.51L503.175 295.51ZM483.324 295.51L473.399 295.51L473.399 293.51L483.324 293.51L483.324 295.51ZM463.473 295.51L453.548 295.51L453.548 293.51L463.473 293.51L463.473 295.51ZM443.622 295.51L433.697 295.51L433.697 293.51L443.622 293.51L443.622 295.51ZM423.771 295.51L413.845 295.51L413.846 293.51L423.771 293.51L423.771 295.51ZM403.92 295.51L393.994 295.51L393.994 293.51L403.92 293.51L403.92 295.51ZM384.069 295.51L374.143 295.51L374.143 293.51L384.069 293.51L384.069 295.51ZM364.218 295.51L354.292 295.51L354.292 293.51L364.218 293.51L364.218 295.51ZM344.367 295.51L334.441 295.51L334.441 293.51L344.367 293.51L344.367 295.51ZM324.516 295.51L314.59 295.51L314.59 293.51L324.516 293.51L324.516 295.51ZM304.665 295.51L294.739 295.51L294.739 293.51L304.665 293.51L304.665 295.51ZM284.813 295.51L274.888 295.51L274.888 293.51L284.813 293.51L284.813 295.51ZM264.962 295.51L260 295.51L260 293.51L264.962 293.51L264.962 295.51ZM1193 294.51L1193 292.51L1193 294.51ZM1228 259.51L1230 259.51L1228 259.51ZM1226.59 172.586C1227.37 171.805 1228.63 171.805 1229.41 172.586L1242.14 185.314C1242.92 186.095 1242.92 187.361 1242.14 188.142C1241.36 188.923 1240.09 188.923 1239.31 188.142L1228 176.828L1216.69 188.142C1215.91 188.923 1214.64 188.923 1213.86 188.142C1213.08 187.361 1213.08 186.095 1213.86 185.314L1226.59 172.586ZM1230 174L1230 179.344L1226 179.344L1226 174L1230 174ZM1230 190.033L1230 200.722L1226 200.722L1226 190.033L1230 190.033ZM1230 211.411L1230 222.1L1226 222.1L1226 211.411L1230 211.411ZM1230 232.788L1230 243.477L1226 243.477L1226 232.788L1230 232.788ZM1230 254.166L1230 259.51L1226 259.51L1226 254.166L1230 254.166ZM1230 259.51C1230 261.146 1229.89 262.759 1229.69 264.34L1225.72 263.823C1225.9 262.412 1226 260.973 1226 259.51L1230 259.51ZM1227.19 273.674C1225.94 276.683 1224.31 279.491 1222.35 282.036L1219.18 279.599C1220.93 277.328 1222.38 274.823 1223.5 272.142L1227.19 273.674ZM1215.53 288.865C1212.98 290.821 1210.17 292.454 1207.16 293.702L1205.63 290.007C1208.31 288.895 1210.82 287.439 1213.09 285.693L1215.53 288.865ZM1197.83 296.198C1196.25 296.404 1194.64 296.51 1193 296.51L1193 292.51C1194.46 292.51 1195.9 292.415 1197.31 292.231L1197.83 296.198ZM1193 296.51L1188.04 296.51L1188.04 292.51L1193 292.51L1193 296.51ZM1178.11 296.51L1168.19 296.51L1168.19 292.51L1178.11 292.51L1178.11 296.51ZM1158.26 296.51L1148.34 296.51L1148.34 292.51L1158.26 292.51L1158.26 296.51ZM1138.41 296.51L1128.48 296.51L1128.48 292.51L1138.41 292.51L1138.41 296.51ZM1118.56 296.51L1108.63 296.51L1108.63 292.51L1118.56 292.51L1118.56 296.51ZM1098.71 296.51L1088.78 296.51L1088.78 292.51L1098.71 292.51L1098.71 296.51ZM1078.86 296.51L1068.93 296.51L1068.93 292.51L1078.86 292.51L1078.86 296.51ZM1059.01 296.51L1049.08 296.51L1049.08 292.51L1059.01 292.51L1059.01 296.51ZM1039.15 296.51L1029.23 296.51L1029.23 292.51L1039.15 292.51L1039.15 296.51ZM1019.3 296.51L1009.38 296.51L1009.38 292.51L1019.3 292.51L1019.3 296.51ZM999.452 296.51L989.527 296.51L989.527 292.51L999.452 292.51L999.452 296.51ZM979.601 296.51L969.676 296.51L969.676 292.51L979.601 292.51L979.601 296.51ZM959.75 296.51L949.824 296.51L949.824 292.51L959.75 292.51L959.75 296.51ZM939.899 296.51L929.973 296.51L929.973 292.51L939.899 292.51L939.899 296.51ZM920.048 296.51L910.122 296.51L910.122 292.51L920.048 292.51L920.048 296.51ZM900.197 296.51L890.271 296.51L890.271 292.51L900.197 292.51L900.197 296.51ZM880.346 296.51L870.42 296.51L870.42 292.51L880.346 292.51L880.346 296.51ZM860.495 296.51L850.569 296.51L850.569 292.51L860.495 292.51L860.495 296.51ZM840.644 296.51L830.718 296.51L830.718 292.51L840.644 292.51L840.644 296.51ZM820.792 296.51L810.867 296.51L810.867 292.51L820.792 292.51L820.792 296.51ZM800.941 296.51L791.016 296.51L791.016 292.51L800.941 292.51L800.941 296.51ZM781.09 296.51L771.165 296.51L771.165 292.51L781.09 292.51L781.09 296.51ZM761.239 296.51L751.314 296.51L751.314 292.51L761.239 292.51L761.239 296.51ZM741.388 296.51L731.463 296.51L731.463 292.51L741.388 292.51L741.388 296.51ZM721.537 296.51L711.612 296.51L711.612 292.51L721.537 292.51L721.537 296.51ZM701.686 296.51L691.761 296.51L691.76 292.51L701.686 292.51L701.686 296.51ZM681.835 296.51L671.909 296.51L671.909 292.51L681.835 292.51L681.835 296.51ZM661.984 296.51L652.058 296.51L652.058 292.51L661.984 292.51L661.984 296.51ZM642.133 296.51L632.207 296.51L632.207 292.51L642.133 292.51L642.133 296.51ZM622.282 296.51L612.356 296.51L612.356 292.51L622.282 292.51L622.282 296.51ZM602.431 296.51L592.505 296.51L592.505 292.51L602.431 292.51L602.431 296.51ZM582.58 296.51L572.654 296.51L572.654 292.51L582.58 292.51L582.58 296.51ZM562.729 296.51L552.803 296.51L552.803 292.51L562.729 292.51L562.729 296.51ZM542.877 296.51L532.952 296.51L532.952 292.51L542.877 292.51L542.877 296.51ZM523.026 296.51L513.101 296.51L513.101 292.51L523.026 292.51L523.026 296.51ZM503.175 296.51L493.25 296.51L493.25 292.51L503.175 292.51L503.175 296.51ZM483.324 296.51L473.399 296.51L473.399 292.51L483.324 292.51L483.324 296.51ZM463.473 296.51L453.548 296.51L453.548 292.51L463.473 292.51L463.473 296.51ZM443.622 296.51L433.697 296.51L433.697 292.51L443.622 292.51L443.622 296.51ZM423.771 296.51L413.845 296.51L413.846 292.51L423.771 292.51L423.771 296.51ZM403.92 296.51L393.994 296.51L393.994 292.51L403.92 292.51L403.92 296.51ZM384.069 296.51L374.143 296.51L374.143 292.51L384.069 292.51L384.069 296.51ZM364.218 296.51L354.292 296.51L354.292 292.51L364.218 292.51L364.218 296.51ZM344.367 296.51L334.441 296.51L334.441 292.51L344.367 292.51L344.367 296.51ZM324.516 296.51L314.59 296.51L314.59 292.51L324.516 292.51L324.516 296.51ZM304.665 296.51L294.739 296.51L294.739 292.51L304.665 292.51L304.665 296.51ZM284.813 296.51L274.888 296.51L274.888 292.51L284.813 292.51L284.813 296.51ZM264.962 296.51L260 296.51L260 292.51L264.962 292.51L264.962 296.51Z"
                        fill="black"
                    />
                    <line
                        x1="118"
                        y1="8.74228e-08"
                        x2="118"
                        y2="146"
                        stroke="black"
                        strokeWidth="4"
                        strokeDasharray="15 15"
                    />
                </svg>
            </div>

            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#9BD7E6]">
                <Footer />
            </div>
        </div>
    )
}

export default Register
