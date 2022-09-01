import express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLengths from './bootcamp/wordLength.js';

const app = express();
app.use(express.static('public'));

app.get('/', function(reg, res){
    res.json({
        "message" : "in our home route"
    });
});

/*app.get('/api/word_game', function(reg, res){
    res.json({
        "message" : "in our API route"
    });
});

app.get('/api/word_game', function(reg, res){

    const sentence = reg.query.sentence;
    res.json({
        "message" : sentence.toUpperCase()
    });
});*/

app.get('/api/word_game', function(reg, res){

    const sentence = reg.query.sentence;

    if (!sentence){
        res.json({
            error : 'please send in a sentence to analyze'
        })
    }

    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence),
        "sum" : sentence. length
    });
});

app.get(`/api/phonebill/total`, function(reg,res){
    const bill = reg.query.bill;
    
});

app.get(`api/enough`, function(reg, res){
    const enough= reg.query. 
});

const PORT = 6007;
app.listen(PORT, function(){
    console.log('api started on port', PORT)
})