import { Link, useNavigate } from "react-router-dom";
import { postUpload } from "../../models/uploads"
import { useState } from "react";

export default function Upload() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleImageChange = (e) => {
        setFormData({...formData, imageFile: e.target.files[0]});
    }

    const submit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const [key, value] of Object.entries(formData)) {
            formDataToSend.append(key, value);
        }
        const upload = await postUpload(formDataToSend);
        if (upload.status == 201) return navigate("/")
        setInfo(upload.msg);
        }

    return (
        <>
        <h1>Upload form</h1>

        <form encType="multipart/form-data">
            <input type="text" name="imageName" placeholder="Napište jméno inzerátu" onChange={handleChange}/>
            <input type="file" name="imageFile"onChange={handleImageChange}/>
            <input type="submit" value={"Přidat inzerát"} onClick={submit}/>
        </form>
        <p>{info}</p>
    <Link to={"/"}>
        <button>Go back</button>
    </Link>
        </>
    )
}