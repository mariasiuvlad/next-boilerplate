import {
  Tournaments_Tournament_Status_Enum_Enum,
  Tournaments_Tournament_Type_Enum_Enum,
} from '__generated__/graphql'
import {InputConfig} from '../types'

/** @TODO move somewhere else */
const selectOptions = (sourceEnum: Record<string, string>) =>
  Object.values(sourceEnum).map((v) => ({
    value: v,
    label: v,
  }))

export const Title: InputConfig = {
  label: 'title',
  placeholder: 'title',
  type: 'text',
  name: 'title',
  id: 'title',
  bind: {
    required: 'Tournament title is required',
  },
}

export const Type = {
  label: 'type',
  placeholder: 'type',
  type: 'select',
  options: selectOptions(Tournaments_Tournament_Type_Enum_Enum),
  name: 'type',
  id: 'type',
  bind: {
    required: 'Tournament type is required',
  },
}

export const Status = {
  label: 'status',
  placeholder: 'status',
  type: 'select',
  options: selectOptions(Tournaments_Tournament_Status_Enum_Enum),
  name: 'status',
  id: 'status',
  bind: {
    required: 'Tournament status is required',
  },
}

export const StartDate = {
  label: 'start_date',
  placeholder: 'start_date',
  type: 'text',
  name: 'start_date',
  id: 'start_date',
  bind: {
    required: 'Tournament start_date is required',
  },
}

export const ParticipantsLimit = {
  label: 'participants_limit',
  placeholder: 'participants_limit',
  type: 'text',
  name: 'participants_limit',
  id: 'participants_limit',
  bind: {
    required: 'Tournament participants_limit is required',
  },
}

export const EntryFee = {
  label: 'entry_fee',
  placeholder: 'entry_fee',
  type: 'text',
  name: 'entry_fee',
  id: 'entry_fee',
  bind: {
    required: 'Tournament entry_fee is required',
  },
}
