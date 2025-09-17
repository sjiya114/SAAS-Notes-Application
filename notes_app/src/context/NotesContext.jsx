import { createContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export const NotesContext=createContext();
axios.defaults.baseURL=import.meta.env.VITE_PUBLIC_BASEURL;
export const NotesContextProvider=({children})=>
{
const [userNotes,setUserNotes]=useState([]);
const nav=useNavigate();
const [adminNotes,setAdminNotes]=useState([]);
const createNote=async(formdata)=>
{
try {
    const res=await axios.post("/notes/createnote",formdata,{headers:{'Content-Type':'application/json'}});
    if(res.data.success)
    {
       toast.success(res.data.message);
       setUserNotes((prevNote)=>[...prevNote,res.data.note]);
    }
    else
    {
        toast.error("error while creating note");
    }
} catch (error) {
    toast.error(error || "error while creating note");
}
}
const deleteNote=async(noteId)=>
{
try {
    const res=await axios.delete(`/notes/deletenote/${noteId}`);
    if(res.data.success)
    {
      toast.success(res.data.message);
      const newNotes=userNotes.filter((note)=>note._id!=noteId);
      setUserNotes(newNotes);
    }
    else
    {
         toast.error("error while deleting note");
    }
} catch (error) {
     toast.error(error || "error while deleting note");
}
}
const updateNote=async(formdata,noteId)=>
{
try {
    const res=await axios.put("/notes/updatenote",formdata,{headers:{'Content-Type':'application/json'}});
    if(res.data.success)
    {
     toast.success(res.data.message);
     const newNotes=userNotes.filter((note)=>note._id!=noteId);
     newNotes.push(res.data.newnote);
     setUserNotes(newNotes);
    }
    else
    {
         toast.error("error while updating notes");
    }
    
} catch (error) {
     toast.error(error || "error while updating notes");
}
}
const getUserNotes=async()=>
{
try {
    const res=await axios.get(`/notes/usernotes`);
    if(res.data.success)
    {
        console.log(res.data.notes);
        setUserNotes(res.data.notes);
console.log("fetched data successfully");
    }
    else
    {
         toast.error("error while fetching notes");
    }
} catch (error) {
     toast.error(error || "error while fetching notes");
}
}
const getAdminNotes=async()=>
{
try {
    const res=await axios.get(`/notes/adminnotes`);
     if(res.data.success)
        {
        setAdminNotes(res.data.notes);
         console.log("fetched data successfully");
        } 
        else
        {
             toast.error("error while fetching notes");
        }
} catch (error) {
     toast.error(error || "error while fetching notes");
}
}
const values={userNotes,adminNotes,createNote,deleteNote,updateNote,getAdminNotes,getUserNotes}
return(
<NotesContext.Provider value={values}>
{children}
</NotesContext.Provider>
);

}