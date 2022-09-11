import React from 'react'
import { useForm } from 'react-hook-form'
import { sendDonation } from 'src/ethereum/interactions/functions'
import { Button } from '../button'
import { Input } from '../input'
import { Form } from './style'

interface Props {
    closeModal()
}

const DonationForm: React.FC<Props> = ({ closeModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = async data => {
        await sendDonation(data.value, data.name, data.cpf)
        closeModal()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="Name"
                {...register('name', { required: true })}
            />
            {errors.name && <span>This field is required</span>}

            <Input placeholder="CPF" {...register('cpf', { required: true })} />
            {errors.cpf && <span>This field is required</span>}

            <Input
                placeholder="Donation value"
                {...register('value', { required: true })}
            />
            {errors.value && <span>This field is required</span>}

            <Button type="submit">Doar</Button>
        </Form>
    )
}

export default DonationForm
