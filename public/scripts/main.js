(function() {
 
 
 'strict'
 

  // Collapsible

  $('.collapsible-item').each(function() {
  
  
    var $this    = $(this),
        $header  = $(this).find('.collapsible-heading > *'),
        $content = $(this).find('.collapsible-content');
  

    var $id = 'collapsible-' + $(this).index();
  
  
    $header.wrapInner('<button aria-expanded="false" aria-controls="' + $id + '">');
    var $button = $header.children('button');
  
  
    $content.attr({
      'id' : $id,
      'aria-hidden' : true
    });
    
      
    // Open if required onload
    if (($this).hasClass('is-open')) {
      
      $button.attr('aria-expanded', true);
      $content.attr('aria-hidden', false).toggle();
      
    }
  
  
    $button.on('click', function(e) {
  
      e.preventDefault();
  
      var state = $(this).attr('aria-expanded') === 'false' ? true : false;
  
      $button.attr('aria-expanded', state);
      $content.attr('aria-hidden', !state);
  
    });
  
  
  });
  
  
  // Tabs
  
  $('.tab-interface').each(function() {
  
    
    var $container = $(this);
    var $tablist   = $(this).find('.tab-menu > ul');
    var $tabpanel  = $(this).find('.tab-content > section');
  
  
    // Add ARIA to tabs
    $tablist.attr('role', 'tablist');
    $tablist.find('li').attr('role', 'presentation');
    $tablist.find('a').attr({
      'role' : 'tab',
      'tabindex' : '-1'
    });
    
    
    // Make each ARIA Control correspond to section ID
    $tablist.find('a').each(function() {
      $(this).attr('aria-controls', $(this).attr('href').substring(1));
    });
    
    
    // Make first tab selected and focusable
    $tablist.find('li:first-child a').attr({
      'aria-selected' : true,
      'tabindex' : 0
    });
    
    
    // Add ARIA to tabpanel
    $tabpanel.attr('role', 'tabpanel');
    
    
    // Make first child of each tabpanel focusable
    $tabpanel.find('> *:first-child').attr('tabindex', 0);
    
    
    // Make all tabpanels hidden except the first one
    $tabpanel.not(':first').attr('aria-hidden', true);
    
    
    // Change focus between tabs using arrow keys
    $tablist.find('[role="tab"]').on('keydown', function(e) {
      
      
      var $original = $(this);
      var $prev     = $(this).parents('li').prev().children('[role="tab"]');
      var $next     = $(this).parents('li').next().children('[role="tab"]');
      var $target;
      
      
      // Find the direction
      switch (e.keyCode) {
        
        case 37:
          $target = $prev;
          break;
          
        case 39:
          $target = $next;
          break;
          
        default:
          $target = false;
          break;
        
      }
      
      
      if ($target.length) {
        
        $original.attr({
          'tabindex' : -1,
          'aria-selected' : null
        });
        
        $target.attr({
          'tabindex' : 0,
          'aria-selected' : true
        }).focus();
        
      };
      
      
      // Hide panels
      $tabpanel.attr('aria-hidden', true);
      
      
      // Show panel which corresponds to target
      $('#' + $(document.activeElement).attr('href').substring(1)).attr('aria-hidden', null);

      
    });
    
  
    $tablist.find('[role="tab"]').on('click', function(e) {
    
    
      e.preventDefault();
      
      
      $('[role="tab"]').attr({
        'tabindex' : -1,
        'aria-selected' : null
      });
      
      
      $(this).attr({
        'tabindex' : 0,
        'aria-selected' : true
      });
      
      
      // Hide panels
      $tabpanel.attr('aria-hidden', true);
      
      
      // Show corresponding panel
      $('#' + $(this).attr('href').substring(1)).attr('aria-hidden', null);
      
      
    });

  
  });
  
  
})();