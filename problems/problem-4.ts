{
    type Circle = {
        shape: 'circle';
        radius: number
    }

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number
    }

    const calculateShapeArea = (param: Circle | Rectangle): number => {
        if (param.shape === 'circle') {
            return Math.PI * param.radius * param.radius;
        }
        else if (param.shape === 'rectangle') {
            return param.width * param.height;
        }
        else {
            return 0;
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);

    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    console.log(rectangleArea);
}