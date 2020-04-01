// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


const $div = $('<div>');
    console.log($div);

$(() => {
    $div.addClass('container');
    const $container = $();
    $div.append($container);
    $('body').append($div);

    const $h1 = $('<h1>').text('Hogwarts');
    $div.append($h1);
    $('body').append($container);

    const $h2 = $('<h2>').text('Katie');
    $div.append($h2);
    $('body').append($container);

    const $h3 = $('<h4>').text('Slytherin');
    $div.append($h3);
    $('body').append($container);

    $div.addClass('cat');
    const $h4 = $('<h4>').text('Katya');
    $div.append($h4);
    $('body').append($container);

    const $newH4 = $('<h4>').text('Cyprus Wood with Unicorn Hair');
    $div.append($newH4);
    $('body').append($container);

    $div.add('<ol>');
    const $storage = $('<trunk>');
    $('div').append($storage);

    $storage.add($li)
    const $li = $('<li1>').text('butter beer')
    $('li').append($storage);
});

// I got stuck and a little frustrated. I can't figure out how to add my line items.
// I'm sorry, I got really sick this week and couldn't keep up.
// Could we go over this sometime?
