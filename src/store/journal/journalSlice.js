import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
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
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        // cuando se le de click al botón +, empezar a crear el espacio en Firebase para empezarla a actualizar
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },

        // establecer la nota activa para cuando se dé click sobre una
        setActiveNote: ( state, action ) => {
            state.active =  action.payload;
            state.messageSaved = '';
        },

        // cargar las notas de Firebase
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },

        // para cuando guardemos las notas
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },

        // actualizar una nota
        updateNote: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            });
            
            state.messageSaved = `${ action.payload.title }, actualizada correctamente.`;
        },

        setPhotosToActiveNote: ( state, action ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },

        clearNotesLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },

        // borrar nota
        deleteNoteById: ( state, action ) => {},
    }
});


// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById
} = journalSlice.actions;