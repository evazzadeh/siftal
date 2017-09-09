
/**
 * handle responsive sidebar on mobile and tablets
 * @return {[type]} [description]
 */
function responsiveSidebar()
{
  $('#main').on('click', function(_e)
  {
    if($(_e.target).parents('#sidenavHandler').length)
    {
      // click on hanlder, do nothing!
      $("body").attr('data-sidebar', 'dada');
    }
    else if($('body').attr('data-sidebar') === undefined)
    {
      // do nothing because its none!
    }
    else
    {
      $("body").attr('data-sidebar', null);
    }
  });

  $('#sidebar a[href]').on('click', function()
  {
      setTimeout(function()
      {
        $("body").attr('data-sidebar', null);
      }, 500);
  })

  // $('#sidebar ul.sidenav > li > a').click(function()
  // {
  //   var menuTitle = $(this);
  //   var submenu   = $(this).parent().children('ul');
  //   console.log(submenu);
  //   if (submenu)
  //   {
  //     submenu.stop().slideToggle(300);
  //     menuTitle.toggleClass('open');
  //   }
  // });
}

