import { createSlice } from '@reduxjs/toolkit'

export const listTaskSlice = createSlice({
    name: 'list',
    initialState: {
        data: [
            {
                title: 'nhat0', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'New', description: 'nhataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
            {
                title: 'nhat1', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Doing', description: 'nhat'
            },
            {
                title: 'nhat21', creator: 'nhat12', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat22', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat23', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat24', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat25', creator: 'nhat44', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat26', creator: 'nhat1', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat27', creator: 'nhat2', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat28', creator: 'nhat3', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat29', creator: 'nhat4', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat20', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat01', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'New', description: 'nhataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
            {
                title: 'nhat11', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Doing', description: 'nhat'
            },
            {
                title: 'nhat211', creator: 'nhat12', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat221', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat231', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat241', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat251', creator: 'nhat44', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat261', creator: 'nhat1', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat271', creator: 'nhat2', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat281', creator: 'nhat3', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat291', creator: 'nhat4', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat201', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat03', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'New', description: 'nhataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
            {
                title: 'nhat13', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Doing', description: 'nhat'
            },
            {
                title: 'nhat213', creator: 'nhat12', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat223', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat233', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat243', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat253', creator: 'nhat44', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat263', creator: 'nhat1', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat273', creator: 'nhat2', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat283', creator: 'nhat3', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat293', creator: 'nhat4', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
            {
                title: 'nhat203', creator: 'nhat', createAt: '2021-08-08 13:37:20', status: 'Done', description: 'nhat'
            },
        ]
    },
    reducers: {
        addTask: (state, action) => {
            state.data.push(action.payload)
        },
        editTask: (state, action) => {
            const editData = {
                title: action.payload.title, creator: action.payload.creator, createAt: action.payload.createAt, status: action.payload.status, description: action.payload.description
            }
            state.data.map((item, index) => {
                if (index === action.payload.index) {
                    state.data.splice(index, 1, editData)
                }
            })
        },
        deleteTask: (state, action) => {
            state.data.map((item, index) => {
                if (index === action.payload) {
                    state.data.splice(index, 1)
                }
            })
        },
        resetTask: (state) => {
            state.data = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask, editTask, deleteTask, resetTask } = listTaskSlice.actions

export default listTaskSlice.reducer