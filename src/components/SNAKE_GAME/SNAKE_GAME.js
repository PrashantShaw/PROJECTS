import React, { useEffect, useState } from 'react'
import Food from './Food'
import './game.css'
import Snake from './Snake'


function SNAKE_GAME() {

    const [direction, setDirection] = useState('RIGHT')
    var [snakeDot, setSnakeDot] = useState([
        [0, 0],
        [0, 2]
    ])

    function randomCoordinates() {
        // GENERATES RANDOM CO-ORDINATES FOR FOOD
        let x = Math.floor(Math.random() * 97 + 1)
        let y = Math.floor(Math.random() * 97 + 1)

        return [x, y]
    }

    let food = [50, 50];

    useEffect(() => {
        console.log('useEffect ::::::')
        // food = randomCoordinates()

        // setInterval(() => {
        //     console.log('500ms')
        //     moveSnake(snakeDot, direction)
        // }, 500);

        window.addEventListener('keydown', onkeydownHandler)


        const timer = setInterval(() => {
            moveSnake()
        }, 500)
        moveSnake()

        return () => {
            clearInterval(timer)
        }
    }, [])


    const onkeydownHandler = (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                setDirection('LEFT')
                break;
            case 'ArrowUp':
                setDirection('UP')
                break;
            case 'ArrowRight':
                setDirection('RIGHT')
                break;
            case 'ArrowDown':
                setDirection('DOWN')
                break;
        }
    }
    function moveSnake() {
        // let snake = [...snakeDot]
        var snake = [[...snakeDot[0]], [...snakeDot[1]]]

        console.log('1 ---------->', snakeDot, snake)
        let head = [...snakeDot[snakeDot.length - 1]]
        let direc = direction
        switch (direc) {
            case 'RIGHT':
                console.log('moving right #####################')
                head = [head[0], head[1] + 2]
                break;
            case 'DOWN':
                head = [head[0] + 2, head[1]]
                break;
            case 'LEFT':
                head = [head[0], head[1] - 2]
                break;
            case 'UP':
                head = [head[0] - 2, head[1]]
                break;
        }
        snake.push(head)
        snake.shift()
        console.log(head, snake, snakeDot, '1')
        setSnakeDot((prev) => {
            console.log('*********************', snake)
            prev = snake
            return [...prev]
        })
        console.log('2 ---------->', snakeDot, snake)
    }
    // console.log('snakeDot ::::', snakeDot)

    return (
        <div className='game-area'>
            <Snake snakeDot={snakeDot} />
            <Food food={food} />
        </div>
    )
}

export default SNAKE_GAME