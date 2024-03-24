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
import { RxCross2 } from "react-icons/rx";
import { Button } from './ui/button'
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from './ui/dialog'


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

const PaymentInfo = () => {

    const info = {
        title: "Muhammad Shahmir Raza",
        number: "03022173193",
        // iban: "PK94FAYS0169007900161339",
        // bcode: "169",
        bank_name: "SadaPay",
    }

    return (
        <div className=' flex flex-col gap-1 md:gap-2 my-2 md:my-3 rounded-xl text-white p-3 md:p-5 bg-gray-800'>
            <div className='text-lg md:text-xl mb-5'>Pay Fees in the following Account and upload the receipt</div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Bank Name: </div>
                <div className=''>{info.bank_name}</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Account Title: </div>
                <div className=''>{info.title}</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Account Number: </div>
                <div className=''>{info.number}</div>
            </div>
{/*             <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>IBAN: </div>
                <div className=''>{info.iban}</div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='text-gray-400'>Branch Code: </div>
                <div className=''>{info.bcode}</div>
            </div> */}
        </div>
    )
}

const InputBox = ({ label, name, type, value, handleChange, isRequired, error}) => {
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
    
    let colorBorder = error ? "border-red-700" : "border-gray-700"
    let textColor = error ? "text-red-200" : "text-[#23B6DF]"

    return (
        <div className="w-full">
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type={isNumber ? 'tel' : type}
                    name={name}
                    id={name}
                    className={`block py-3 px-4 w-full text-lg text-white bg-gray-900 rounded-lg bg-gray-800 border-0 border-b-2 ${colorBorder} appearance-none focus:outline-none focus:ring-0 focus:border-[#003149] peer`}
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
                    className={`z-0 peer-focus:font-medium text-md absolute ${textColor} duration-300 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#23B6DF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 ml-3 ${transformedClass}`}
                >
                    {label}
                    <span className={`${textColor}`}>{isRequired && ' *'}</span>
                </label>
            </div>
        </div>
    )
}

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [competitionType, setCompetitionType] = useState('')
    const [competition, setCompetition] = useState('')
    const [showDialog, setShowDialog] = useState(false)

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
        'Fast Stock Exchange'
    ]

    const roboticsCompetitions = [
        'Line Following Robot (LFR) Competition',
        'Robo Soccer Competition'
    ]

    let competitionOptions = []
    if (competitionType === "CS Competitions") {
        competitionOptions = csCompetitions
    }
    else if (competitionType === "General Competitions") {
        competitionOptions = generalCompetitions
    }
    else if(competitionType === "Robotics Competitions"){
        competitionOptions = roboticsCompetitions;
    }
    else {
        competitionOptions = []
    }
    const competitionTypes = [
        'CS Competitions',
        // 'General Competitions',
        // 'Robotics Competitions'
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
            error.competition({ ...error, competitionType: false })
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
            if  (error[name] === true){
                setError({ ...error, [name]: false });
            }
        }
    };
    
    const handleSubmit = async () => {

        console.log(error)
        
        if (competition === '' || competitionType === '') {
            alert('Please select a competition')
            if (competition === ""){
                setError({ ...error, competition: true})
            }
            if (competitionType === ""){
                setError({ ...error, competitionType: true})
            }
            return
        }

        if (teamName === ''){
            alert("Please select a team name")
            setError({...error, teamName: true})
            return
        }

        if (member1 === '' || email1 === '' || phone1 === '' || cnic1 === '') {
            alert('Please fill in the required fields')
            setError({...error, 
                member1: member1 === "",
                phone1: phone1 === "",
                cnic1: cnic1 === "",
                email1: email1 === ""
            });
            return
        }

        if (files === null) {
            alert('Please upload a payment receipt')
            setError({...error, file: true})
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
                    'https://api.acmdevday.com/addParticipant',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(participantData),
                    }
                )

                console.log(response)

                if (response.ok) {
                    console.log('Submitted successfully:', response)
                    setShowDialog(true)

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
                    setFiles(null)
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
                member1: false,
                cnic1: false,	
                email1: false,
                phone1: false,
                file: false,
            })
        }
    }

    return (
        <div className="bg-[#03071C]">
            <div className="bg-[#03071C] flex justify-center items-center flex-col">
                <div className=" part1 flex justify-space-evenly items-center xl:flex lg:flex sm:inline-block md:inline-block sm:text-center md:text-center mt-16">
                <div className="mt-12">
                    <h1 className="mainh1 text-[#23B6DF] font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-600 sm:mb-8 md:mb-8">
                        REGISTER NOW!
                    </h1>
                    <div className="scale-65 part2 mt-16 hidden sm:flex md:hidden lg:inline xl:inline 2xl:inline ml-auto">
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
                            <span className="text-red-700">{error.competitionType && ' *'} </span>
                        </h2>
                        <br />

                        <div className="text-start mt-10 mb-16 md:mb-22 ">
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
            <div className="mx-auto relative z-10 bg-[#03071C] ">
                <h1 className="text-center text-2xl font-bold mb-4 text-[#23B6DF]">
                    SELECT A COMPETITION
                    <span className="text-red-700">{error.competition && ' *'} </span>
                </h1>
                <div className=' flex justify-center align-center'>
                    <div className="mx-6 w-full md:w-[950px] borde relative">
                        <Select 
                            className="bg-gray-800 border-none text-white"
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
                                                className="hover:bg-gray-800"
                                            >
                                                {comp}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="absolute inset-y-0 end-1 right-2 top-1 flex items-center pointer-events-none">
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
                    error={error.teamName}
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
                            error={error.member1}
                        />
                        <InputBox
                            label="CNIC Number"
                            name="cnic1"
                            type="cnic"
                            value={cnic1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.cnic1}
                        />
                        <InputBox
                            label="Email Address"
                            name="email1"
                            type="email"
                            value={email1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.email1}
                        />
                        <InputBox
                            label="WhatsApp Number"
                            name="phone1"
                            type="number"
                            value={phone1}
                            isRequired={true}
                            handleChange={handleInput}
                            error={error.phone1}
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
                            isRequired={false}
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
                            isRequired={false}
                            handleChange={handleInput}
                        />
                    </div>
                </div>                                                                        

                <div className="flex flex-col md:flex-col gap-5 w-[270px] sm:w-[350px] md:w-[400px] lg:w-[65%] mx-auto">
                    <h4  className='text-gray-400 '>Enter a reference code (if any!)</h4>
                    <InputBox
                        label="Reference Code (if any)"
                        name="referenceCode"
                        type="text"
                        value={referenceCode}
                        isRequired={false}
                        handleChange={handleInput}
                    />
                </div>

                <Card className="bg-gray-900 border-gray-700  md:w-4/6 m-5">
                    <CardHeader>
                        <CardTitle className="text-[#23B6DF] mx-auto mb-3">
                            Upload Payment Receipt
                            <span className="text-red-700">
                                {error.file && ' *'}{' '}
                            </span>
                        </CardTitle>
                        <CardDescription>
                            <PaymentInfo/>
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
                            <div className="relative h-44 md:h-72 overflow-hidden round-md">
                                <img
                                    src={
                                        files.type.startsWith('image/')
                                            ? URL.createObjectURL(files)
                                            : ''
                                    }
                                    alt={files.name}
                                    className="rounded-lg"
                                />
                               <div
                                    className="border absolute top-2 right-2 m-1 rounded-full p-2 z-1000"
                                    style={{ transition: 'background-color 0.3s ease' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2e4f7cdb')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        setFiles(null)
                                    }}
                                >
                                    <RxCross2 className="text-white text-xl" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>


                <div className="bg-gray-900 border-gray-700 px-2 rounded-3xl flex justify-center align-center">
                        <h2 className="mainh1 text-[#23B6DF] mx-auto font-medium text-xl mt-4 text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-600 text-balance sm:mb-8 md:mb-8">
                            PKR. 1199 for scavanger Hunt 
                            PKR. 999 for ALL OTHER COMPETITIONS.
                        </h2>
                </div>
                
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
                        className={`py-4 border min-h-10 font-medium text-[#23B6DF] rounded-xl transition-all shadow-[5px_5px_0px_black] ${
                            loading ? 'cursor-not-allowed opacity-50 shadow-none' : ''
                        }`}
                    >
                        <h1 className="text-2xl font-bold">
                            {loading ? 'Submitting...' : 'SUBMIT'}
                        </h1>
                    </button>

                </div>
            </div>
            <div className="hidden lg:flex lg:ml-[250px] relative top-[-190px] z-0">
                <svg width="850" height="550" viewBox="0 0 1279 781" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M328.48 347L324.205 339.325H320.505V347H318.905V329.275H325.08C328.255 329.275 330.355 331.475 330.355 334.325C330.355 336.9 328.63 338.875 325.93 339.225L330.33 347H328.48ZM320.505 337.9H324.83C327.18 337.9 328.755 336.475 328.755 334.325C328.755 332.15 327.18 330.7 324.83 330.7H320.505V337.9ZM333.779 340.075H341.729C341.679 337.85 340.254 336.1 337.754 336.1C335.529 336.1 333.929 337.875 333.779 340.075ZM341.904 343.15L343.229 343.625C342.554 345.65 340.754 347.325 338.004 347.325C334.854 347.325 332.204 345 332.204 341C332.204 337.25 334.754 334.75 337.729 334.75C341.254 334.75 343.279 337.25 343.304 340.775C343.304 340.975 343.304 341.125 343.279 341.325H333.729V341.425C333.754 344.175 335.654 345.975 338.004 345.975C340.154 345.975 341.404 344.725 341.904 343.15ZM355.743 335.075L351.018 347H349.443L344.718 335.075H346.418L350.218 345.3L354.068 335.075H355.743ZM359.968 347H358.468V335.075H359.968V347ZM357.968 330.125C357.968 329.4 358.518 328.875 359.218 328.875C359.918 328.875 360.468 329.4 360.468 330.125C360.468 330.85 359.918 331.375 359.218 331.375C358.518 331.375 357.968 330.85 357.968 330.125ZM364.711 340.075H372.661C372.611 337.85 371.186 336.1 368.686 336.1C366.461 336.1 364.861 337.875 364.711 340.075ZM372.836 343.15L374.161 343.625C373.486 345.65 371.686 347.325 368.936 347.325C365.786 347.325 363.136 345 363.136 341C363.136 337.25 365.686 334.75 368.661 334.75C372.186 334.75 374.211 337.25 374.236 340.775C374.236 340.975 374.236 341.125 374.211 341.325H364.661V341.425C364.686 344.175 366.586 345.975 368.936 345.975C371.086 345.975 372.336 344.725 372.836 343.15ZM384.197 335.075H385.822L389.372 345.15L392.497 335.075H394.122L390.222 347H388.547L384.997 336.9L381.447 347H379.772L375.822 335.075H377.472L380.647 345.15L384.197 335.075ZM404.519 351.75H402.894L405.869 345.45L400.794 335.075H402.469L406.644 343.875L410.594 335.075H412.244L404.519 351.75ZM419.428 347.325C416.103 347.325 413.503 344.775 413.503 341.05C413.503 337.3 416.078 334.775 419.428 334.775C422.753 334.775 425.353 337.3 425.353 341.05C425.353 344.775 422.753 347.325 419.428 347.325ZM415.028 341.05C415.028 344.15 417.078 345.975 419.428 345.975C421.778 345.975 423.828 344.15 423.828 341.05C423.828 337.925 421.778 336.125 419.428 336.125C417.078 336.125 415.028 337.925 415.028 341.05ZM436.587 345.15C436.037 346.3 434.712 347.325 432.837 347.325C429.812 347.325 428.387 345.075 428.387 342.575V335.075H429.887V342.325C429.887 344.225 430.762 345.975 433.112 345.975C435.237 345.975 436.487 344.35 436.487 342.35V335.075H437.987V344.725C437.987 345.625 438.062 346.475 438.137 347H436.712C436.662 346.75 436.587 346.075 436.587 345.325V345.15ZM448.088 335.05V336.625C447.813 336.55 447.438 336.5 447.038 336.5C445.013 336.5 443.513 337.8 443.513 340.525V347H442.013V335.075H443.488V337.3C444.213 335.65 445.588 334.925 447.163 334.925C447.563 334.925 447.888 334.975 448.088 335.05ZM457.82 347H456.32V335.075H457.82V347ZM455.82 330.125C455.82 329.4 456.37 328.875 457.07 328.875C457.77 328.875 458.32 329.4 458.32 330.125C458.32 330.85 457.77 331.375 457.07 331.375C456.37 331.375 455.82 330.85 455.82 330.125ZM463.313 339.875V347H461.813V335.075H463.263V336.975C463.913 335.7 465.313 334.775 467.138 334.775C469.938 334.775 471.363 336.775 471.363 339.225V347H469.863V339.475C469.863 337.6 468.938 336.125 466.638 336.125C464.588 336.125 463.313 337.85 463.313 339.875ZM480.843 336.425H477.518V347H476.018V336.425H473.568V335.075H476.018V332.6C476.018 330.075 477.568 328.75 479.568 328.75C480.193 328.75 480.643 328.875 480.918 329V330.35C480.693 330.25 480.318 330.15 479.793 330.15C478.593 330.15 477.518 330.775 477.518 332.675V335.075H480.843V336.425ZM488.007 347.325C484.682 347.325 482.082 344.775 482.082 341.05C482.082 337.3 484.657 334.775 488.007 334.775C491.332 334.775 493.932 337.3 493.932 341.05C493.932 344.775 491.332 347.325 488.007 347.325ZM483.607 341.05C483.607 344.15 485.657 345.975 488.007 345.975C490.357 345.975 492.407 344.15 492.407 341.05C492.407 337.925 490.357 336.125 488.007 336.125C485.657 336.125 483.607 337.925 483.607 341.05ZM503.191 335.05V336.625C502.916 336.55 502.541 336.5 502.141 336.5C500.116 336.5 498.616 337.8 498.616 340.525V347H497.116V335.075H498.591V337.3C499.316 335.65 500.691 334.925 502.266 334.925C502.666 334.925 502.991 334.975 503.191 335.05ZM507.039 347H505.539V335.075H507.014V337.05C507.539 335.8 508.964 334.75 510.814 334.75C512.664 334.75 514.089 335.775 514.564 337.45C515.289 335.725 516.764 334.75 518.664 334.75C520.989 334.75 522.789 336.35 522.789 339.1V347H521.289V339.275C521.289 337.475 520.239 336.075 518.239 336.075C516.264 336.075 514.914 337.725 514.914 339.675V347H513.414V339.275C513.414 337.475 512.389 336.075 510.364 336.075C508.389 336.075 507.039 337.7 507.039 339.675V347ZM529.682 347.3C527.182 347.3 525.782 345.65 525.782 343.925C525.782 341.9 527.182 340.725 529.357 340.4L532.532 339.925C533.557 339.775 533.782 339.325 533.782 338.775C533.782 337.2 532.732 336.075 530.782 336.075C528.882 336.075 527.632 337.125 527.432 338.85L526.032 338.55C526.307 336.275 528.207 334.775 530.757 334.775C533.857 334.775 535.282 336.65 535.282 338.925V344.95C535.282 345.9 535.357 346.5 535.457 347H533.982C533.932 346.725 533.832 345.925 533.832 344.95C533.282 346.075 531.857 347.3 529.682 347.3ZM529.857 346.025C532.132 346.025 533.782 344.525 533.782 342.125V340.775C533.707 340.85 533.382 341 532.907 341.075L529.582 341.575C528.182 341.775 527.307 342.55 527.307 343.85C527.307 344.95 528.207 346.025 529.857 346.025ZM541.46 331.3V335.075H544.56V336.425H541.46V343.625C541.46 345.075 542.135 345.775 543.485 345.775C543.91 345.775 544.335 345.675 544.56 345.575V346.9C544.36 347 543.81 347.125 543.085 347.125C541.16 347.125 539.96 345.95 539.96 343.775V336.425H537.435V335.075H538.335C539.51 335.075 540.01 334.55 540.01 333.325V331.3H541.46ZM548.738 347H547.238V335.075H548.738V347ZM546.738 330.125C546.738 329.4 547.288 328.875 547.988 328.875C548.688 328.875 549.238 329.4 549.238 330.125C549.238 330.85 548.688 331.375 547.988 331.375C547.288 331.375 546.738 330.85 546.738 330.125ZM557.831 347.325C554.506 347.325 551.906 344.775 551.906 341.05C551.906 337.3 554.481 334.775 557.831 334.775C561.156 334.775 563.756 337.3 563.756 341.05C563.756 344.775 561.156 347.325 557.831 347.325ZM553.431 341.05C553.431 344.15 555.481 345.975 557.831 345.975C560.181 345.975 562.231 344.15 562.231 341.05C562.231 337.925 560.181 336.125 557.831 336.125C555.481 336.125 553.431 337.925 553.431 341.05ZM568.44 339.875V347H566.94V335.075H568.39V336.975C569.04 335.7 570.44 334.775 572.265 334.775C575.065 334.775 576.49 336.775 576.49 339.225V347H574.99V339.475C574.99 337.6 574.065 336.125 571.765 336.125C569.715 336.125 568.44 337.85 568.44 339.875ZM589.862 347.3C587.362 347.3 585.962 345.65 585.962 343.925C585.962 341.9 587.362 340.725 589.537 340.4L592.712 339.925C593.737 339.775 593.962 339.325 593.962 338.775C593.962 337.2 592.912 336.075 590.962 336.075C589.062 336.075 587.812 337.125 587.612 338.85L586.212 338.55C586.487 336.275 588.387 334.775 590.937 334.775C594.037 334.775 595.462 336.65 595.462 338.925V344.95C595.462 345.9 595.537 346.5 595.637 347H594.162C594.112 346.725 594.012 345.925 594.012 344.95C593.462 346.075 592.037 347.3 589.862 347.3ZM590.037 346.025C592.312 346.025 593.962 344.525 593.962 342.125V340.775C593.887 340.85 593.562 341 593.087 341.075L589.762 341.575C588.362 341.775 587.487 342.55 587.487 343.85C587.487 344.95 588.387 346.025 590.037 346.025ZM600.837 339.875V347H599.337V335.075H600.787V336.975C601.437 335.7 602.837 334.775 604.662 334.775C607.462 334.775 608.887 336.775 608.887 339.225V347H607.387V339.475C607.387 337.6 606.462 336.125 604.162 336.125C602.112 336.125 600.837 337.85 600.837 339.875ZM613.44 341.025C613.44 343.825 615.04 345.975 617.565 345.975C620.04 345.975 621.615 343.825 621.615 341.025C621.615 338.2 620.04 336.1 617.59 336.1C615.09 336.1 613.44 338.15 613.44 341.025ZM621.615 345.125V344.65C621.09 345.875 619.765 347.325 617.44 347.325C614.09 347.325 611.94 344.575 611.94 341.025C611.94 337.525 614.14 334.75 617.44 334.75C619.99 334.75 621.165 336.3 621.59 337.325V328.95H623.09V344.725C623.09 346 623.19 346.875 623.215 347H621.74C621.69 346.7 621.615 345.975 621.615 345.125ZM638.615 336.1C636.24 336.1 634.265 337.975 634.265 341.05C634.265 344.075 636.215 345.975 638.615 345.975C640.915 345.975 642.09 344.375 642.49 343.05L643.815 343.6C643.24 345.45 641.49 347.325 638.615 347.325C635.24 347.325 632.765 344.7 632.765 341.05C632.765 337.375 635.265 334.75 638.615 334.75C641.465 334.75 643.165 336.5 643.715 338.5L642.39 339.05C641.99 337.65 640.915 336.1 638.615 336.1ZM648.323 347H646.823V328.95H648.323V347ZM653.816 347H652.316V335.075H653.816V347ZM651.816 330.125C651.816 329.4 652.366 328.875 653.066 328.875C653.766 328.875 654.316 329.4 654.316 330.125C654.316 330.85 653.766 331.375 653.066 331.375C652.366 331.375 651.816 330.85 651.816 330.125ZM662.834 336.1C660.459 336.1 658.484 337.975 658.484 341.05C658.484 344.075 660.434 345.975 662.834 345.975C665.134 345.975 666.309 344.375 666.709 343.05L668.034 343.6C667.459 345.45 665.709 347.325 662.834 347.325C659.459 347.325 656.984 344.7 656.984 341.05C656.984 337.375 659.484 334.75 662.834 334.75C665.684 334.75 667.384 336.5 667.934 338.5L666.609 339.05C666.209 337.65 665.134 336.1 662.834 336.1ZM680.867 335.075L675.792 340.15L680.967 347H679.092L674.742 341.175L672.542 343.35V347H671.042V328.95H672.542V341.375L678.792 335.075H680.867ZM688.914 343.875L690.289 343.4C690.514 344.85 691.614 346.025 693.564 346.025C695.039 346.025 696.214 345.15 696.214 343.9C696.214 342.8 695.464 342.2 694.189 341.9L692.264 341.45C690.514 341.05 689.339 340 689.339 338.275C689.339 336.35 691.189 334.775 693.364 334.775C696.139 334.775 697.314 336.425 697.639 337.85L696.314 338.35C696.089 337.2 695.264 336.075 693.364 336.075C692.014 336.075 690.814 336.925 690.814 338.175C690.814 339.2 691.464 339.8 692.689 340.075L694.589 340.5C696.564 340.95 697.689 342.075 697.689 343.8C697.689 345.575 696.189 347.325 693.539 347.325C690.614 347.325 689.139 345.45 688.914 343.875ZM708.95 345.15C708.4 346.3 707.075 347.325 705.2 347.325C702.175 347.325 700.75 345.075 700.75 342.575V335.075H702.25V342.325C702.25 344.225 703.125 345.975 705.475 345.975C707.6 345.975 708.85 344.35 708.85 342.35V335.075H710.35V344.725C710.35 345.625 710.425 346.475 710.5 347H709.075C709.025 346.75 708.95 346.075 708.95 345.325V345.15ZM715.851 347H714.376V328.95H715.876V337.375C716.401 336.2 717.801 334.75 720.201 334.75C723.526 334.75 725.601 337.475 725.601 341.025C725.601 344.575 723.476 347.325 720.151 347.325C717.851 347.325 716.476 345.95 715.851 344.675V347ZM719.976 345.975C722.426 345.975 724.101 343.925 724.101 341.025C724.101 338.15 722.426 336.1 719.976 336.1C717.526 336.1 715.851 338.15 715.851 341.025C715.851 343.925 717.526 345.975 719.976 345.975ZM730.305 347H728.805V335.075H730.28V337.05C730.805 335.8 732.23 334.75 734.08 334.75C735.93 334.75 737.355 335.775 737.83 337.45C738.555 335.725 740.03 334.75 741.93 334.75C744.255 334.75 746.055 336.35 746.055 339.1V347H744.555V339.275C744.555 337.475 743.505 336.075 741.505 336.075C739.53 336.075 738.18 337.725 738.18 339.675V347H736.68V339.275C736.68 337.475 735.655 336.075 733.63 336.075C731.655 336.075 730.305 337.7 730.305 339.675V347ZM751.423 347H749.923V335.075H751.423V347ZM749.423 330.125C749.423 329.4 749.973 328.875 750.673 328.875C751.373 328.875 751.923 329.4 751.923 330.125C751.923 330.85 751.373 331.375 750.673 331.375C749.973 331.375 749.423 330.85 749.423 330.125ZM757.842 331.3V335.075H760.942V336.425H757.842V343.625C757.842 345.075 758.517 345.775 759.867 345.775C760.292 345.775 760.717 345.675 760.942 345.575V346.9C760.742 347 760.192 347.125 759.467 347.125C757.542 347.125 756.342 345.95 756.342 343.775V336.425H753.817V335.075H754.717C755.892 335.075 756.392 334.55 756.392 333.325V331.3H757.842ZM411.845 366.3V370.075H414.945V371.425H411.845V378.625C411.845 380.075 412.52 380.775 413.87 380.775C414.295 380.775 414.72 380.675 414.945 380.575V381.9C414.745 382 414.195 382.125 413.47 382.125C411.545 382.125 410.345 380.95 410.345 378.775V371.425H407.82V370.075H408.72C409.895 370.075 410.395 369.55 410.395 368.325V366.3H411.845ZM422.724 382.325C419.399 382.325 416.799 379.775 416.799 376.05C416.799 372.3 419.374 369.775 422.724 369.775C426.049 369.775 428.649 372.3 428.649 376.05C428.649 379.775 426.049 382.325 422.724 382.325ZM418.324 376.05C418.324 379.15 420.374 380.975 422.724 380.975C425.074 380.975 427.124 379.15 427.124 376.05C427.124 372.925 425.074 371.125 422.724 371.125C420.374 371.125 418.324 372.925 418.324 376.05ZM439.802 386.75H438.302V370.075H439.777V372.45C440.352 371.225 441.752 369.75 444.127 369.75C447.502 369.75 449.527 372.5 449.527 376.025C449.527 379.575 447.427 382.325 444.077 382.325C441.777 382.325 440.402 380.95 439.802 379.75V386.75ZM448.027 376.025C448.027 373.225 446.377 371.1 443.877 371.1C441.402 371.1 439.777 373.25 439.777 376.025C439.777 378.85 441.402 380.975 443.877 380.975C446.377 380.975 448.027 378.825 448.027 376.025ZM458.806 370.05V371.625C458.531 371.55 458.156 371.5 457.756 371.5C455.731 371.5 454.231 372.8 454.231 375.525V382H452.731V370.075H454.206V372.3C454.931 370.65 456.306 369.925 457.881 369.925C458.281 369.925 458.606 369.975 458.806 370.05ZM465.936 382.325C462.611 382.325 460.011 379.775 460.011 376.05C460.011 372.3 462.586 369.775 465.936 369.775C469.261 369.775 471.861 372.3 471.861 376.05C471.861 379.775 469.261 382.325 465.936 382.325ZM461.536 376.05C461.536 379.15 463.586 380.975 465.936 380.975C468.286 380.975 470.336 379.15 470.336 376.05C470.336 372.925 468.286 371.125 465.936 371.125C463.586 371.125 461.536 372.925 461.536 376.05ZM480.07 371.1C477.695 371.1 475.72 372.975 475.72 376.05C475.72 379.075 477.67 380.975 480.07 380.975C482.37 380.975 483.545 379.375 483.945 378.05L485.27 378.6C484.695 380.45 482.945 382.325 480.07 382.325C476.695 382.325 474.22 379.7 474.22 376.05C474.22 372.375 476.72 369.75 480.07 369.75C482.92 369.75 484.62 371.5 485.17 373.5L483.845 374.05C483.445 372.65 482.37 371.1 480.07 371.1ZM489.028 375.075H496.978C496.928 372.85 495.503 371.1 493.003 371.1C490.778 371.1 489.178 372.875 489.028 375.075ZM497.153 378.15L498.478 378.625C497.803 380.65 496.003 382.325 493.253 382.325C490.103 382.325 487.453 380 487.453 376C487.453 372.25 490.003 369.75 492.978 369.75C496.503 369.75 498.528 372.25 498.553 375.775C498.553 375.975 498.553 376.125 498.528 376.325H488.978V376.425C489.003 379.175 490.903 380.975 493.253 380.975C495.403 380.975 496.653 379.725 497.153 378.15ZM502.407 375.075H510.357C510.307 372.85 508.882 371.1 506.382 371.1C504.157 371.1 502.557 372.875 502.407 375.075ZM510.532 378.15L511.857 378.625C511.182 380.65 509.382 382.325 506.632 382.325C503.482 382.325 500.832 380 500.832 376C500.832 372.25 503.382 369.75 506.357 369.75C509.882 369.75 511.907 372.25 511.932 375.775C511.932 375.975 511.932 376.125 511.907 376.325H502.357V376.425C502.382 379.175 504.282 380.975 506.632 380.975C508.782 380.975 510.032 379.725 510.532 378.15ZM515.711 376.025C515.711 378.825 517.311 380.975 519.836 380.975C522.311 380.975 523.886 378.825 523.886 376.025C523.886 373.2 522.311 371.1 519.861 371.1C517.361 371.1 515.711 373.15 515.711 376.025ZM523.886 380.125V379.65C523.361 380.875 522.036 382.325 519.711 382.325C516.361 382.325 514.211 379.575 514.211 376.025C514.211 372.525 516.411 369.75 519.711 369.75C522.261 369.75 523.436 371.3 523.861 372.325V363.95H525.361V379.725C525.361 381 525.461 381.875 525.486 382H524.011C523.961 381.7 523.886 380.975 523.886 380.125ZM541.17 371.425H537.845V382H536.345V371.425H533.895V370.075H536.345V367.6C536.345 365.075 537.895 363.75 539.895 363.75C540.52 363.75 540.97 363.875 541.245 364V365.35C541.02 365.25 540.645 365.15 540.12 365.15C538.92 365.15 537.845 365.775 537.845 367.675V370.075H541.17V371.425ZM548.334 382.325C545.009 382.325 542.409 379.775 542.409 376.05C542.409 372.3 544.984 369.775 548.334 369.775C551.659 369.775 554.259 372.3 554.259 376.05C554.259 379.775 551.659 382.325 548.334 382.325ZM543.934 376.05C543.934 379.15 545.984 380.975 548.334 380.975C550.684 380.975 552.734 379.15 552.734 376.05C552.734 372.925 550.684 371.125 548.334 371.125C545.984 371.125 543.934 372.925 543.934 376.05ZM563.518 370.05V371.625C563.243 371.55 562.868 371.5 562.468 371.5C560.443 371.5 558.943 372.8 558.943 375.525V382H557.443V370.075H558.918V372.3C559.643 370.65 561.018 369.925 562.593 369.925C562.993 369.925 563.318 369.975 563.518 370.05ZM573.25 386.75H571.75V370.075H573.225V372.45C573.8 371.225 575.2 369.75 577.575 369.75C580.95 369.75 582.975 372.5 582.975 376.025C582.975 379.575 580.875 382.325 577.525 382.325C575.225 382.325 573.85 380.95 573.25 379.75V386.75ZM581.475 376.025C581.475 373.225 579.825 371.1 577.325 371.1C574.85 371.1 573.225 373.25 573.225 376.025C573.225 378.85 574.85 380.975 577.325 380.975C579.825 380.975 581.475 378.825 581.475 376.025ZM589.203 382.3C586.703 382.3 585.303 380.65 585.303 378.925C585.303 376.9 586.703 375.725 588.878 375.4L592.053 374.925C593.078 374.775 593.303 374.325 593.303 373.775C593.303 372.2 592.253 371.075 590.303 371.075C588.403 371.075 587.153 372.125 586.953 373.85L585.553 373.55C585.828 371.275 587.728 369.775 590.278 369.775C593.378 369.775 594.803 371.65 594.803 373.925V379.95C594.803 380.9 594.878 381.5 594.978 382H593.503C593.453 381.725 593.353 380.925 593.353 379.95C592.803 381.075 591.378 382.3 589.203 382.3ZM589.378 381.025C591.653 381.025 593.303 379.525 593.303 377.125V375.775C593.228 375.85 592.903 376 592.428 376.075L589.103 376.575C587.703 376.775 586.828 377.55 586.828 378.85C586.828 379.95 587.728 381.025 589.378 381.025ZM600.686 386.75H599.061L602.036 380.45L596.961 370.075H598.636L602.811 378.875L606.761 370.075H608.411L600.686 386.75ZM612.361 382H610.861V370.075H612.336V372.05C612.861 370.8 614.286 369.75 616.136 369.75C617.986 369.75 619.411 370.775 619.886 372.45C620.611 370.725 622.086 369.75 623.986 369.75C626.311 369.75 628.111 371.35 628.111 374.1V382H626.611V374.275C626.611 372.475 625.561 371.075 623.561 371.075C621.586 371.075 620.236 372.725 620.236 374.675V382H618.736V374.275C618.736 372.475 617.711 371.075 615.686 371.075C613.711 371.075 612.361 372.7 612.361 374.675V382ZM632.729 375.075H640.679C640.629 372.85 639.204 371.1 636.704 371.1C634.479 371.1 632.879 372.875 632.729 375.075ZM640.854 378.15L642.179 378.625C641.504 380.65 639.704 382.325 636.954 382.325C633.804 382.325 631.154 380 631.154 376C631.154 372.25 633.704 369.75 636.679 369.75C640.204 369.75 642.229 372.25 642.254 375.775C642.254 375.975 642.254 376.125 642.229 376.325H632.679V376.425C632.704 379.175 634.604 380.975 636.954 380.975C639.104 380.975 640.354 379.725 640.854 378.15ZM646.858 374.875V382H645.358V370.075H646.808V371.975C647.458 370.7 648.858 369.775 650.683 369.775C653.483 369.775 654.908 371.775 654.908 374.225V382H653.408V374.475C653.408 372.6 652.483 371.125 650.183 371.125C648.133 371.125 646.858 372.85 646.858 374.875ZM661.089 366.3V370.075H664.189V371.425H661.089V378.625C661.089 380.075 661.764 380.775 663.114 380.775C663.539 380.775 663.964 380.675 664.189 380.575V381.9C663.989 382 663.439 382.125 662.714 382.125C660.789 382.125 659.589 380.95 659.589 378.775V371.425H657.064V370.075H657.964C659.139 370.075 659.639 369.55 659.639 368.325V366.3H661.089ZM666.417 380.8C666.417 380.075 666.992 379.475 667.717 379.475C668.467 379.475 669.042 380.075 669.042 380.8C669.042 381.525 668.467 382.1 667.717 382.1C666.992 382.1 666.417 381.525 666.417 380.8Z" fill="white"/>
                    <path d="M122.875 374.875H139.125V428.5H150.875V444.125H139.125V463H120.75V444.125H78L74.875 430.5L122.875 374.875ZM120.75 428.5V401.25L97.5 428.5H120.75ZM185.182 463H164.932V443H185.182V463Z" fill="white"/>
                    <circle cx="115.5" cy="428.5" r="113" stroke="#23B6DF" stroke-width="5" stroke-dasharray="10 10"/>
                    <path d="M1193 438.51L1193 437.51L1193 437.51L1193 438.51ZM1228 403.51L1229 403.51L1228 403.51ZM1227.29 317.292C1227.68 316.902 1228.32 316.902 1228.71 317.292L1235.07 323.656C1235.46 324.047 1235.46 324.68 1235.07 325.071C1234.68 325.461 1234.05 325.461 1233.66 325.071L1228 319.414L1222.34 325.071C1221.95 325.461 1221.32 325.461 1220.93 325.071C1220.54 324.68 1220.54 324.047 1220.93 323.656L1227.29 317.292ZM1229 318L1229 323.344L1227 323.344L1227 318L1229 318ZM1229 334.033L1229 344.721L1227 344.721L1227 334.033L1229 334.033ZM1229 355.41L1229 366.099L1227 366.099L1227 355.41L1229 355.41ZM1229 376.788L1229 387.477L1227 387.477L1227 376.788L1229 376.788ZM1229 398.165L1229 403.51L1227 403.51L1227 398.165L1229 398.165ZM1229 403.51C1229 405.102 1228.9 406.671 1228.7 408.21L1226.71 407.952C1226.9 406.498 1227 405.016 1227 403.51L1229 403.51ZM1226.27 417.29C1225.05 420.218 1223.47 422.95 1221.56 425.427L1219.98 424.208C1221.77 421.868 1223.27 419.288 1224.42 416.524L1226.27 417.29ZM1214.92 432.072C1212.44 433.975 1209.71 435.564 1206.78 436.778L1206.01 434.93C1208.78 433.784 1211.36 432.284 1213.7 430.486L1214.92 432.072ZM1197.7 439.206C1196.16 439.406 1194.59 439.51 1193 439.51L1193 437.51C1194.51 437.51 1195.99 437.412 1197.44 437.222L1197.7 439.206ZM1193 439.51L1188.04 439.51L1188.04 437.51L1193 437.51L1193 439.51ZM1178.11 439.51L1168.19 439.51L1168.19 437.51L1178.11 437.51L1178.11 439.51ZM1158.26 439.51L1148.34 439.51L1148.34 437.51L1158.26 437.51L1158.26 439.51ZM1138.41 439.51L1128.48 439.51L1128.48 437.51L1138.41 437.51L1138.41 439.51ZM1118.56 439.51L1108.63 439.51L1108.63 437.51L1118.56 437.51L1118.56 439.51ZM1098.71 439.51L1088.78 439.51L1088.78 437.51L1098.71 437.51L1098.71 439.51ZM1078.86 439.51L1068.93 439.51L1068.93 437.51L1078.86 437.51L1078.86 439.51ZM1059.01 439.51L1049.08 439.51L1049.08 437.51L1059.01 437.51L1059.01 439.51ZM1039.15 439.51L1029.23 439.51L1029.23 437.51L1039.15 437.51L1039.15 439.51ZM1019.3 439.51L1009.38 439.51L1009.38 437.51L1019.3 437.51L1019.3 439.51ZM999.452 439.51L989.527 439.51L989.527 437.51L999.452 437.51L999.452 439.51ZM979.601 439.51L969.676 439.51L969.676 437.51L979.601 437.51L979.601 439.51ZM959.75 439.51L949.824 439.51L949.824 437.51L959.75 437.51L959.75 439.51ZM939.899 439.51L929.973 439.51L929.973 437.51L939.899 437.51L939.899 439.51ZM920.048 439.51L910.122 439.51L910.122 437.51L920.048 437.51L920.048 439.51ZM900.197 439.51L890.271 439.51L890.271 437.51L900.197 437.51L900.197 439.51ZM880.346 439.51L870.42 439.51L870.42 437.51L880.346 437.51L880.346 439.51ZM860.495 439.51L850.569 439.51L850.569 437.51L860.495 437.51L860.495 439.51ZM840.644 439.51L830.718 439.51L830.718 437.51L840.644 437.51L840.644 439.51ZM820.792 439.51L810.867 439.51L810.867 437.51L820.792 437.51L820.792 439.51ZM800.941 439.51L791.016 439.51L791.016 437.51L800.941 437.51L800.941 439.51ZM781.09 439.51L771.165 439.51L771.165 437.51L781.09 437.51L781.09 439.51ZM761.239 439.51L751.314 439.51L751.314 437.51L761.239 437.51L761.239 439.51ZM741.388 439.51L731.463 439.51L731.463 437.51L741.388 437.51L741.388 439.51ZM721.537 439.51L711.612 439.51L711.612 437.51L721.537 437.51L721.537 439.51ZM701.686 439.51L691.761 439.51L691.76 437.51L701.686 437.51L701.686 439.51ZM681.835 439.51L671.909 439.51L671.909 437.51L681.835 437.51L681.835 439.51ZM661.984 439.51L652.058 439.51L652.058 437.51L661.984 437.51L661.984 439.51ZM642.133 439.51L632.207 439.51L632.207 437.51L642.133 437.51L642.133 439.51ZM622.282 439.51L612.356 439.51L612.356 437.51L622.282 437.51L622.282 439.51ZM602.431 439.51L592.505 439.51L592.505 437.51L602.431 437.51L602.431 439.51ZM582.58 439.51L572.654 439.51L572.654 437.51L582.58 437.51L582.58 439.51ZM562.729 439.51L552.803 439.51L552.803 437.51L562.729 437.51L562.729 439.51ZM542.877 439.51L532.952 439.51L532.952 437.51L542.877 437.51L542.877 439.51ZM523.026 439.51L513.101 439.51L513.101 437.51L523.026 437.51L523.026 439.51ZM503.175 439.51L493.25 439.51L493.25 437.51L503.175 437.51L503.175 439.51ZM483.324 439.51L473.399 439.51L473.399 437.51L483.324 437.51L483.324 439.51ZM463.473 439.51L453.548 439.51L453.548 437.51L463.473 437.51L463.473 439.51ZM443.622 439.51L433.697 439.51L433.697 437.51L443.622 437.51L443.622 439.51ZM423.771 439.51L413.845 439.51L413.846 437.51L423.771 437.51L423.771 439.51ZM403.92 439.51L393.994 439.51L393.994 437.51L403.92 437.51L403.92 439.51ZM384.069 439.51L374.143 439.51L374.143 437.51L384.069 437.51L384.069 439.51ZM364.218 439.51L354.292 439.51L354.292 437.51L364.218 437.51L364.218 439.51ZM344.367 439.51L334.441 439.51L334.441 437.51L344.367 437.51L344.367 439.51ZM324.516 439.51L314.59 439.51L314.59 437.51L324.516 437.51L324.516 439.51ZM304.665 439.51L294.739 439.51L294.739 437.51L304.665 437.51L304.665 439.51ZM284.813 439.51L274.888 439.51L274.888 437.51L284.813 437.51L284.813 439.51ZM264.962 439.51L260 439.51L260 437.51L264.962 437.51L264.962 439.51ZM1193 438.51L1193 437.51L1193 437.51L1193 438.51ZM1228 403.51L1229 403.51L1228 403.51ZM1227.29 317.292C1227.68 316.902 1228.32 316.902 1228.71 317.292L1235.07 323.656C1235.46 324.047 1235.46 324.68 1235.07 325.071C1234.68 325.461 1234.05 325.461 1233.66 325.071L1228 319.414L1222.34 325.071C1221.95 325.461 1221.32 325.461 1220.93 325.071C1220.54 324.68 1220.54 324.047 1220.93 323.656L1227.29 317.292ZM1229 318L1229 323.344L1227 323.344L1227 318L1229 318ZM1229 334.033L1229 344.721L1227 344.721L1227 334.033L1229 334.033ZM1229 355.41L1229 366.099L1227 366.099L1227 355.41L1229 355.41ZM1229 376.788L1229 387.477L1227 387.477L1227 376.788L1229 376.788ZM1229 398.165L1229 403.51L1227 403.51L1227 398.165L1229 398.165ZM1229 403.51C1229 405.102 1228.9 406.671 1228.7 408.21L1226.71 407.952C1226.9 406.498 1227 405.016 1227 403.51L1229 403.51ZM1226.27 417.29C1225.05 420.218 1223.47 422.95 1221.56 425.427L1219.98 424.208C1221.77 421.868 1223.27 419.288 1224.42 416.524L1226.27 417.29ZM1214.92 432.072C1212.44 433.975 1209.71 435.564 1206.78 436.778L1206.01 434.93C1208.78 433.784 1211.36 432.284 1213.7 430.486L1214.92 432.072ZM1197.7 439.206C1196.16 439.406 1194.59 439.51 1193 439.51L1193 437.51C1194.51 437.51 1195.99 437.412 1197.44 437.222L1197.7 439.206ZM1193 439.51L1188.04 439.51L1188.04 437.51L1193 437.51L1193 439.51ZM1178.11 439.51L1168.19 439.51L1168.19 437.51L1178.11 437.51L1178.11 439.51ZM1158.26 439.51L1148.34 439.51L1148.34 437.51L1158.26 437.51L1158.26 439.51ZM1138.41 439.51L1128.48 439.51L1128.48 437.51L1138.41 437.51L1138.41 439.51ZM1118.56 439.51L1108.63 439.51L1108.63 437.51L1118.56 437.51L1118.56 439.51ZM1098.71 439.51L1088.78 439.51L1088.78 437.51L1098.71 437.51L1098.71 439.51ZM1078.86 439.51L1068.93 439.51L1068.93 437.51L1078.86 437.51L1078.86 439.51ZM1059.01 439.51L1049.08 439.51L1049.08 437.51L1059.01 437.51L1059.01 439.51ZM1039.15 439.51L1029.23 439.51L1029.23 437.51L1039.15 437.51L1039.15 439.51ZM1019.3 439.51L1009.38 439.51L1009.38 437.51L1019.3 437.51L1019.3 439.51ZM999.452 439.51L989.527 439.51L989.527 437.51L999.452 437.51L999.452 439.51ZM979.601 439.51L969.676 439.51L969.676 437.51L979.601 437.51L979.601 439.51ZM959.75 439.51L949.824 439.51L949.824 437.51L959.75 437.51L959.75 439.51ZM939.899 439.51L929.973 439.51L929.973 437.51L939.899 437.51L939.899 439.51ZM920.048 439.51L910.122 439.51L910.122 437.51L920.048 437.51L920.048 439.51ZM900.197 439.51L890.271 439.51L890.271 437.51L900.197 437.51L900.197 439.51ZM880.346 439.51L870.42 439.51L870.42 437.51L880.346 437.51L880.346 439.51ZM860.495 439.51L850.569 439.51L850.569 437.51L860.495 437.51L860.495 439.51ZM840.644 439.51L830.718 439.51L830.718 437.51L840.644 437.51L840.644 439.51ZM820.792 439.51L810.867 439.51L810.867 437.51L820.792 437.51L820.792 439.51ZM800.941 439.51L791.016 439.51L791.016 437.51L800.941 437.51L800.941 439.51ZM781.09 439.51L771.165 439.51L771.165 437.51L781.09 437.51L781.09 439.51ZM761.239 439.51L751.314 439.51L751.314 437.51L761.239 437.51L761.239 439.51ZM741.388 439.51L731.463 439.51L731.463 437.51L741.388 437.51L741.388 439.51ZM721.537 439.51L711.612 439.51L711.612 437.51L721.537 437.51L721.537 439.51ZM701.686 439.51L691.761 439.51L691.76 437.51L701.686 437.51L701.686 439.51ZM681.835 439.51L671.909 439.51L671.909 437.51L681.835 437.51L681.835 439.51ZM661.984 439.51L652.058 439.51L652.058 437.51L661.984 437.51L661.984 439.51ZM642.133 439.51L632.207 439.51L632.207 437.51L642.133 437.51L642.133 439.51ZM622.282 439.51L612.356 439.51L612.356 437.51L622.282 437.51L622.282 439.51ZM602.431 439.51L592.505 439.51L592.505 437.51L602.431 437.51L602.431 439.51ZM582.58 439.51L572.654 439.51L572.654 437.51L582.58 437.51L582.58 439.51ZM562.729 439.51L552.803 439.51L552.803 437.51L562.729 437.51L562.729 439.51ZM542.877 439.51L532.952 439.51L532.952 437.51L542.877 437.51L542.877 439.51ZM523.026 439.51L513.101 439.51L513.101 437.51L523.026 437.51L523.026 439.51ZM503.175 439.51L493.25 439.51L493.25 437.51L503.175 437.51L503.175 439.51ZM483.324 439.51L473.399 439.51L473.399 437.51L483.324 437.51L483.324 439.51ZM463.473 439.51L453.548 439.51L453.548 437.51L463.473 437.51L463.473 439.51ZM443.622 439.51L433.697 439.51L433.697 437.51L443.622 437.51L443.622 439.51ZM423.771 439.51L413.845 439.51L413.846 437.51L423.771 437.51L423.771 439.51ZM403.92 439.51L393.994 439.51L393.994 437.51L403.92 437.51L403.92 439.51ZM384.069 439.51L374.143 439.51L374.143 437.51L384.069 437.51L384.069 439.51ZM364.218 439.51L354.292 439.51L354.292 437.51L364.218 437.51L364.218 439.51ZM344.367 439.51L334.441 439.51L334.441 437.51L344.367 437.51L344.367 439.51ZM324.516 439.51L314.59 439.51L314.59 437.51L324.516 437.51L324.516 439.51ZM304.665 439.51L294.739 439.51L294.739 437.51L304.665 437.51L304.665 439.51ZM284.813 439.51L274.888 439.51L274.888 437.51L284.813 437.51L284.813 439.51ZM264.962 439.51L260 439.51L260 437.51L264.962 437.51L264.962 439.51Z" fill="#23B6DF"/>
                    <line x1="118" y1="144" x2="118" y2="290" stroke="#23B6DF" stroke-width="4" stroke-dasharray="15 15"/>
                </svg>

            </div>

            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#9BD7E6]">
                <Footer />
            </div>
            {showDialog && (
                    <Dialog
                        open={showDialog}
                        onClose={() => setShowDialog(false)}
                        className="bg-gray-800 "
                    >
                        <DialogContent className="bg-gray-900 text-white rounded-xl mx-2 w-72">
                            <DialogHeader>
                                <DialogTitle className="text-center mt-5">
                                    Form Submitted Successfully !!{' '}
                                </DialogTitle>
                                <DialogDescription className="text-center text-md mt-5 ">
                                    <div className='mt-6'>
                                        Your form has been successfully submitted.
                                        You will receive a confirmation email within 48 hours Thank you! 
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button
                                    onClick={() => setShowDialog(false)}
                                    className="border border-gray-600 mx-auto"
                                >
                                    OK
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
        </div>
    )
}

export default Register
