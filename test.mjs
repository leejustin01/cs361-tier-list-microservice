import fetch from 'node-fetch';

const testBrawler = async () => {
    const response = await fetch('http://localhost:8082/brawler/');
    const text = await response.text();
    console.log(text);
}

const testGear = async () => {
    const response = await fetch('http://localhost:8082/gear/');
    const text = await response.text();
    console.log(text);
}

testBrawler();
testGear();