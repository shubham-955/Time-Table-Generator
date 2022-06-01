import React, { useState, useEffect } from 'react'
import { BASE_URL, GetFetch, PostFetch } from '../../ApiManager/ApiConst'
import styles from './Home.module.css'

export const Home = () => {

    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState({
        teacher: '',
        subject: '',
        studentGroup: '',
        start: null,
        end: null
    });

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await GetFetch(`${BASE_URL}slots`);
        if (response.status === 200) {
            setData(response.slots);
        }
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await PostFetch(`${BASE_URL}slots`, inputData)
        if (response.status === 200) {
            getData();
            setInputData({
                teacher: '',
                subject: '',
                studentGroup: '',
                start: null,
                end: null
            })
        } else {
            alert(response.message)
            setInputData({
                teacher: '',
                subject: '',
                studentGroup: '',
                start: null,
                end: null
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
                <div>
                    <p>Select Teacher</p>
                    <select name="teacher" id="teacher" value={inputData.teacher} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Teacher_1">Teacher 1</option>
                        <option value="Teacher_2">Teacher 2</option>
                        <option value="Teacher_3">Teacher 3</option>
                        <option value="Teacher_4">Teacher 4</option>
                    </select>
                </div>
                <div>
                    <p>Select Subject</p>
                    <select name="subject" id="subject" value={inputData.subject} onChange={handleChange}>
                        <option value=""></option>
                        <option value="DSA">DSA</option>
                        <option value="React">React</option>
                        <option value="Redux">Redux</option>
                        <option value="Node_Js">Node_Js</option>
                    </select>
                </div>
                <div>
                    <p>Select Student Group</p>
                    <select name="studentGroup" id="studentGroup" value={inputData.studentGroup} onChange={handleChange}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </div>
                <div>
                    <p>Select Start Time</p>
                    <select name="start" id="start" value={inputData.start} onChange={handleChange}>
                        <option value=""></option>
                        <option value="9.30">9.30</option>
                        <option value="10.30">10.30</option>
                        <option value="12.00">12.00</option>
                        <option value="1.00">1.00</option>
                    </select>
                </div>
                <div>
                    <p>Select End Time</p>
                    <select name="end" id="end" value={inputData.end} onChange={handleChange}>
                        <option value=""></option>
                        <option value="10.30">10.30</option>
                        <option value="11.30">11.30</option>
                        <option value="1.00">1.00</option>
                        <option value="2.00">2.00</option>
                    </select>
                </div>
            </div>
            <button className={styles.submit}>Generate</button>
            {data.length !== 0 &&
                <div>
                    <table className={styles.table}>
                        <th>Teacher</th>
                        <th>Subject</th>
                        <th>Student Group</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        {
                            data.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.teacher}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.studentGroup}</td>
                                        <td>{item.start}</td>
                                        <td>{item.end}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>}
        </form>
    )
}
