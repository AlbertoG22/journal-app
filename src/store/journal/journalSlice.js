import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // },
    },
    reducers: {
        // cuando se le de click al botón +, empezar a crear el espacio en Firebase para empezarla a actualizar
        addEmptyNote: ( state, action ) => {},

        // establecer la nota activa para cuando se dé click sobre una
        setActiveNote: ( state, action ) => {},

        // cargar las notas de Firebase
        setNotes: ( state, action ) => {},

        // para cuando guardemos las notas
        setSaving: ( state ) => {},

        // actualizar una nota
        updateNote: ( state, action ) => {},

        // borrar nota
        deleteNoteById: ( state, action ) => {},
    }
});


// Action creators are generated for each case reducer function
export const {
    addEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;