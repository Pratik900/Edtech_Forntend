import axios from "axios";

export async function fetchCourses(){
    try {
        const response=await axios.get("http://localhost:9090/courses");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function sentCourses(coursedata){
    try {
        const response=await axios.post("http://localhost:9090/courses",coursedata);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCourse(id){
    try{
        const response = await axios.delete(`http://localhost:9090/courses/${id}`)
        return response.data;
    }catch(error){
        console.log(error)
    }
}

export async function FetchCourseId(id){
    try{
        const response = await axios.get(`http://localhost:9090/courses/${id}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}

export async function updateCourse(updateData){
    try{
        const response = await axios.put(`http://localhost:9090/courses`,updateData)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}

export async function sentlogin(data){
    try {
        const response=await axios.post("http://localhost:9090/login",data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getByName(name){
    try{
        const response = await axios.get(`http://localhost:9090/login/${name}`)
        return response.data;
    }catch(error){
        console.log(error)
    }   
}