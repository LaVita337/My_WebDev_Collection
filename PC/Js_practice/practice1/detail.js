var button = $('.tab-button');
var content = $('.tab-content');

function tagCount(number){
    button.removeClass('orange');
    content.removeClass('show');
    button.eq(number).addClass('orange');
    content.eq(number).addClass('show');
}

/* for (let i = 0; i < 3; i++) {
    $('.tab-button').eq(i).on('click', function () {
        tagCount(i);
    });
} */


/* $('.list').click(function(e){
    if ($(e.target).is($('.tab-button').eq(0))){
        tagCount(0);
    }
    if ($(e.target).is($('.tab-button').eq(1))){
        tagCount(1);
    };
    if ($(e.target).is($('.tab-button').eq(2))){
        tagCount(2);
    };
}); */

var shirts = ['S', 'M', 'L', 'XL'];
var pants = [28, 30, 32, 34];

$('.form-select').eq(0).on('input',function(){
    var value = this.value;
    var formSelect = $('.form-select');
    if (value == 'Shirts'){
        formSelect.eq(1).removeClass('form-hide');
        formSelect.eq(1).html('');
        shirts.forEach(function(data){
        $('.form-select').eq(1).append(`<option>${data}</option>`);
    });
    } else if (value == 'Pants'){
        formSelect.eq(1).removeClass('form-hide');
        formSelect.eq(1).html('');
        pants.forEach(function(data){
        $('.form-select').eq(1).append(`<option>${data}</option>`);
    })
}
});


//Find a name from the Name list.

var nameList = ['흥민', '영희', '철수', '재석'];

function findName(name){
    for (var i = 0; i < nameList.length; i++){
        if (name == nameList[i]){
            console.log(name + ' is in the name list')
        } 
        }
    };

// multiplication Table

function multiplicationTable(num1, num2) {
    result = num1 * num2;
    return result;
}

function multiplicationResult(num){
    for (let i = 1; i < 10; i++){
        result = num * i;
        console.log(result);
    }
}


function averageScoreBySubject (scoresBySubject,nowScoreAvg){
    var result = 0;
    
    for (let i = 0; i < scoresBySubject.length; i++){
        result = result + scoresBySubject[i]
    }

    var baseScoreAvg = result / scoresBySubject.length;

    if(result/scoresBySubject.length > nowScoreAvg){
        console.log(`Great! your average has increased by ${(baseScoreAvg - nowScoreAvg).toFixed(2)} points.`);
    } else {
        console.log(`Well..I recommend you to study one more year. Your average has decreased ${(baseScoreAvg - nowScoreAvg).toFixed(2)} points.`);
    }
};




    $('.list').click(function (e) {
        tagCount(e.target.dataset.id);
    });

    var car = ['Sonata', 50000, 'White']
    var car2 = {
        name: 'Sonata',
        price: [50000, 30000, 10000],
        color: 'White'
    }
    $('.itemPrice').html(car2.price[2]);



