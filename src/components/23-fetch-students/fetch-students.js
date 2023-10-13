import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import StudentCard from './student-card'

const FetchStudents = () => {

    /*
        when we assign the same object or array, state will be updated 
        all the time.It will check references of object or array. So the JS and JSX codes will be re-rendered
    */
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => { //We used useEffect to avoid getting error. It will load only one, and it will not be rerender again and again. 
        //We get error when we send each request to DB. Status will be updated when we send each request to DB
      
        setTimeout(()=>{
            fetch("https://650b0d62dfd73d1fab097d88.mockapi.io/api/v1/students")
        .then((resp)=>resp.json())
        .then((data)=>{setStudents(data)})
        
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
        }, 5000)
      
    }, [])
    

  return (
    <Container className='mt-5'>

        {loading && <Spinner animation="border" variant="primary" />}

        <Row className='g-4'>

            {
                students.map((student)=>
                <Col key={student.id} sm={6} md={4} lg={4} xl={2} >
                <StudentCard {...student} />
                </Col>)
            }
            
        </Row>
    </Container>
  )
}

export default FetchStudents