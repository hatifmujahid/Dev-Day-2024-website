import React, { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
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
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from './ui/dialog'

import { useDropzone } from 'react-dropzone'

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

const Ambassador = () => {
    const [loading, setLoading] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsappNumber: '',
        universityName: '',
        department: '',
        yearOfBatch: '',
        socialMediaActivity: '',
        instagramId: '',
        facebookId: '',
        promotionPlan: '',
        programDiscovery: '',
        pastExperience: '',
        agreeTerms: false,
    })

    const [error, setError] = useState({
        name: false,
        email: false,
        whatsappNumber: false,
        universityName: false,
        department: false,
        yearOfBatch: false,
        socialMediaActivity: false,
        instagramId: false,
        facebookId: false,
        promotionPlan: false,
        programDiscovery: false,
        pastExperience: false,
        agreeTerms: false,
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

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target

        if (type === 'checkbox') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: checked,
            }))
        } else {
            let updatedValue = value

            // Apply specific validations based on the input name
            switch (name) {
                case 'name':
                    updatedValue = value.slice(0, 25) // Truncate name to 25 characters
                    setError((prevError) => ({ ...prevError, name: false }))
                    break
                case 'email':
                    setError((prevError) => ({ ...prevError, email: false }))
                    break
                case 'whatsappNumber':
                    // Remove non-numeric characters and limit to 11 digits
                    updatedValue = value.replace(/\D/g, '').slice(0, 11)
                    setError((prevError) => ({
                        ...prevError,
                        whatsappNumber: false,
                    }))
                    break
                case 'universityName':
                    updatedValue = value.slice(0, 60) // Truncate university name to 60 characters
                    setError((prevError) => ({
                        ...prevError,
                        universityName: false,
                    }))
                    break
                case 'department':
                    updatedValue = value.slice(0, 50) // Truncate department to 50 characters
                    setError((prevError) => ({
                        ...prevError,
                        department: false,
                    }))
                    break
                case 'yearOfBatch':
                    // Ensure it's a number and limit to 4 digits
                    updatedValue = value.replace(/\D/g, '').slice(0, 4)
                    setError((prevError) => ({
                        ...prevError,
                        yearOfBatch: false,
                    }))
                    break
                case 'instagramId':
                case 'facebookId':
                    updatedValue = value.slice(0, 50) // Truncate Instagram and Facebook IDs to 50 characters
                    setError((prevError) => ({ ...prevError, [name]: false }))
                    setError((prevError) => ({ ...prevError, [name]: false }))
                    break
                case 'promotionPlan':
                case 'pastExperience':
                    updatedValue = value.slice(0, 300) // Truncate promotion plan and past experience to 300 characters
                    setError((prevError) => ({ ...prevError, [name]: false }))
                    setError((prevError) => ({ ...prevError, [name]: false }))
                    break
                default:
                    break
            }

            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : updatedValue,
            }))
        }
    }

    const handleSubmit = () => {
        setLoading(true)

        if (formData.name === '') {
            setError((prevError) => ({ ...prevError, name: true }))
        }

        if (formData.email === '') {
            setError((prevError) => ({ ...prevError, email: true }))
        }

        if (formData.whatsappNumber === '') {
            setError((prevError) => ({ ...prevError, whatsappNumber: true }))
        }

        if (formData.universityName === '') {
            setError((prevError) => ({ ...prevError, universityName: true }))
        }

        if (formData.department === '') {
            setError((prevError) => ({ ...prevError, department: true }))
        }

        if (formData.yearOfBatch === '') {
            setError((prevError) => ({ ...prevError, yearOfBatch: true }))
        }

        if (formData.socialMediaActivity === '') {
            setError((prevError) => ({
                ...prevError,
                socialMediaActivity: true,
            }))
        }

        if (formData.instagramId === '') {
            setError((prevError) => ({ ...prevError, instagramId: true }))
        }

        if (formData.facebookId === '') {
            setError((prevError) => ({ ...prevError, facebookId: true }))
        }

        if (formData.promotionPlan === '') {
            setError((prevError) => ({ ...prevError, promotionPlan: true }))
        }

        if (formData.programDiscovery === '') {
            setError((prevError) => ({ ...prevError, programDiscovery: true }))
        }

        if (formData.pastExperience === '') {
            setError((prevError) => ({ ...prevError, pastExperience: true }))
        }

        if (formData.agreeTerms === false) {
            setError((prevError) => ({ ...prevError, agreeTerms: true }))
        }

        if (files === null) {
            setError((prevError) => ({ ...prevError, file: true }))
        }

        if (Object.values(formData).some((value) => value === '')) {
            alert('Please fill all the fields')
            setLoading(false)
            return
        }

        if (formData.agreeTerms === false) {
            alert('You must agree to the terms to submit the form.')
            setLoading(false)
            return
        }

        if (!files || !files.type.startsWith('image/')) {
            alert('Please upload an image file.')
            setLoading(false)
            return
        }

        try {
            const reader = new FileReader()
            reader.readAsDataURL(files)
            reader.onload = async () => {
                const base64Image = reader.result

                // Create an object with the form data and the Base64 image
                const data = {
                    name: formData.name,
                    email: formData.email,
                    whatsapp_number: formData.whatsappNumber,
                    college: formData.universityName,
                    department: formData.department,
                    year_of_batch: formData.yearOfBatch,
                    social_media_activity: formData.socialMediaActivity,
                    instagram_id: formData.instagramId,
                    facebook_id: formData.facebookId,
                    promotion_strategy: formData.promotionPlan,
                    source: formData.programDiscovery,
                    past_experience: formData.pastExperience,
                    agree: formData.agreeTerms,
                    file: base64Image,
                }

                const response = await fetch(
                    'https://api.acmdevday.com/addAmbassador',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }
                )

                const responseData = await response.json()

                if (responseData.success) {
                    setFormData({
                        name: '',
                        email: '',
                        whatsappNumber: '',
                        universityName: '',
                        department: '',
                        yearOfBatch: '',
                        socialMediaActivity: '',
                        instagramId: '',
                        facebookId: '',
                        promotionPlan: '',
                        programDiscovery: '',
                        pastExperience: '',
                        agreeTerms: false,
                    })

                    setFiles([])
                    setShowDialog(true)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }
        } catch {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <div className="bg-[#03071C] p-4 md:p-12 text-white flex justify-center ">
            <div className="flex flex-col gap-4 mt-16 w-72 md:w-[655px] md:w-[855px]">
                <h2 className="text-[#23B6DF] text-4xl md:text-7xl font-black text-center">
                    {' '}
                    DevDay'24{' '}
                </h2>
                <h2 className="text-[#088097] text-3xl md:text-6xl  font-black text-center">
                    Ambassador Form
                </h2>
                <div className="border border-[#4C878F]/[0.2] h-0.5 mt-8 mb-7"></div>

                <Label>
                    Name{' '}
                    <span className="text-red-700">{error.name && ' *'} </span>
                </Label>
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-slate-800 border-none focus-visible:ring-transparent  outline-none" // Tailwind classes for input box
                />

                <Label>
                    Email{' '}
                    <span className="text-red-700">{error.email && ' *'} </span>
                </Label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    WhatsApp Number{' '}
                    <span className="text-red-700">
                        {error.whatsappNumber && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="WhatsApp Number eg. 0334567890"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    University Name{' '}
                    <span className="text-red-700">
                        {error.universityName && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="universityName"
                    value={formData.universityName}
                    onChange={handleChange}
                    placeholder="University Name eg. Fast Nuces"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    Department{' '}
                    <span className="text-red-700">
                        {error.department && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Department eg. Computer Science"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    Year of Batch{' '}
                    <span className="text-red-700">
                        {error.yearOfBatch && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="yearOfBatch"
                    value={formData.yearOfBatch}
                    onChange={handleChange}
                    placeholder="Year of Batch eg. 2023"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    On a scale of 1-5, how active you are on social media?{' '}
                    <span className="text-red-700">
                        {error.socialMediaActivity && ' *'}{' '}
                    </span>
                </Label>
                <Select
                    value={formData.socialMediaActivity}
                    onValueChange={(value) =>
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            socialMediaActivity: value,
                        }))
                    }
                    className="bg-slate-800 border-none text-gray-200"
                >
                    <SelectTrigger
                        aria-label="Social Media Activity"
                        className="bg-slate-800 border-0 focus:ring-0"
                    >
                        <SelectValue placeholder="Select Social Media Activity Level" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 text-white border-0 focus:ring-0">
                        <SelectGroup>
                            <SelectLabel>Social Media Activity</SelectLabel>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Label>
                    Instagram ID{' '}
                    <span className="text-red-700">
                        {error.instagramId && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="instagramId"
                    value={formData.instagramId}
                    onChange={handleChange}
                    placeholder="Instagram ID eg. @username"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    Facebook ID{' '}
                    <span className="text-red-700">
                        {error.facebookId && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="facebookId"
                    value={formData.facebookId}
                    onChange={handleChange}
                    placeholder="Facebook ID eg. @username"
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    How would you promote our event on your campus?{' '}
                    <span className="text-red-700">
                        {error.promotionPlan && ' *'}{' '}
                    </span>
                </Label>
                <div className="relative h-auto">
                    <Textarea
                        name="promotionPlan"
                        value={formData.promotionPlan}
                        onChange={handleChange}
                        placeholder="Promotion Plan"
                        className="relative bg-slate-800 border-none text-gray-200 h-36" // Tailwind classes for textarea
                    />
                    <div className="text-gray-200 absolute bottom-2 right-2 ">
                        {formData.promotionPlan.length}/300
                    </div>
                </div>

                <Label>
                    How did you know of our BA program?{' '}
                    <span className="text-red-700">
                        {error.programDiscovery && ' *'}{' '}
                    </span>
                </Label>
                <Input
                    name="programDiscovery"
                    value={formData.programDiscovery}
                    onChange={handleChange}
                    placeholder="Program Discovery eg. Instagram, Facebook, etc."
                    className="bg-slate-800 border-none text-gray-200" // Tailwind classes for input box
                />

                <Label>
                    Past Experience{' '}
                    <span className="text-red-700">
                        {error.pastExperience && ' *'}{' '}
                    </span>
                </Label>

                <div className="relative">
                    <Textarea
                        name="pastExperience"
                        value={formData.pastExperience}
                        onChange={handleChange}
                        placeholder="Past Experience"
                        className="bg-slate-800 border-none text-gray-200 h-36" // Tailwind classes for textarea
                    />
                    <div className="text-gray-200 absolute bottom-2 right-2 ">
                        {formData.pastExperience.length}/300
                    </div>
                </div>

                <div className="flex items-center gap-2 m-1 md:m-5 cursor-pointer">
                    <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) =>
                            handleChange({
                                target: {
                                    name: 'agreeTerms',
                                    type: 'checkbox',
                                    checked,
                                },
                            })
                        }
                        className="accent-white w-6 h-6 bg-gray-900 border-2 "
                    />
                    <span className="text-red-700">
                        {error.agreeTerms && ' *'}{' '}
                    </span>

                    <Label htmlFor="agreeTerms" className="text-gray-200">
                        <div className="cursor cursor-pointer text-sm">
                            I agree to perform my ambassador duties
                            wholeheartedly and acknowledge that team DevDay has
                            the rights to remove my name from their brand
                            ambassadors list.
                        </div>
                    </Label>
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

                <div className="mx-auto my-6">
                    <Button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white w-44 md:w-72 h-12 rounded-md"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </div>
                {showDialog && (
                    <Dialog
                        open={showDialog}
                        onClose={() => setShowDialog(false)}
                        className="bg-gray-900 rounded"
                    >
                        <DialogContent className="bg-gray-900 text-white rounded-xl mx-2 w-72">
                            <DialogHeader>
                                <DialogTitle className="text-center">
                                    Form Submitted Successfully !!{' '}
                                </DialogTitle>
                                <DialogDescription className="text-center text-md ">
                                    Your form has been successfully submitted.
                                    Thank you! We will Reach out to shortly
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button
                                    onClick={() => setShowDialog(false)}
                                    className="border"
                                >
                                    Close
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    )
}

export default Ambassador
