<template>
    <div class="row">
        <div class="small-12 small-centered columns">
            <div class="row">
                <div class="small-3 columns">
                    <div id="edit-panel">
                        <span id="chart-state-panel">
                            <div class="row">
                                <div class="small-3 columns">
                                    <div class="switch">
                                        <input class="switch-input" id="exampleSwitch" type="checkbox" name="chart-state" value="view">
                                        <label class="switch-paddle" for="exampleSwitch"></label>
                                    </div>
                                </div>
                                <div class="small-8 columns">
                                    <div>
                                        <p><font size="5">EDIT</font></p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <label class="selected-node-group">Node Video:</label>
                        <input type="text" id="selected-node" class="selected-node-group" disabled>

                        <label>Change Node Video:</label>
                        <select id="change" disabled>
                            <option value="one" class="option">one</option>
                            <option value="two" class="option">two</option>
                            <option value="three" class="option">three</option>
                        </select>

                        <label>Select New Video:</label>
                        <select id="select" disabled>
                            <option value="one" class="option">one</option>
                            <option value="two" class="option">two</option>
                            <option value="three" class="option">three</option>
                        </select>

                        <!-- <select>
                          <option v-for="(   , index) in xxx" :key="index">{{xxx}}</option> -->

                        <label>Branch Plot:</label>
                        <div id="new-nodelist">
                            <textarea type="text" class="new-node" style="height:100px;" id="textfield" disabled></textarea>
                        </div>

                        <!-- <span id="node-type-panel" class="radio-panel">
                            <input type="radio" name="node-type" id="rd-parent" value="parent"><label for="rd-parent">Parent(root)</label>
                            <input type="radio" name="node-type" id="rd-child" value="children"><label for="rd-child">Child</label>
                            <input type="radio" name="node-type" id="rd-sibling" value="siblings"><label for="rd-sibling">Sibling</label>
                        </span> -->

                        <div class="row">
                            <div class="small-6 columns">
                                <button type="button" class="button" id="btn-add-nodes" style="width:120px" disabled>Add</button>
                            </div>
                            <div class="small-6 columns">
                                <button type="button" class="button alert" id="btn-delete-nodes" style="width:120px" disabled>Delete</button>
                            </div>
                        </div>
                        <button type="button" class="button success" id="btn-commit" style="width:270px;margin-top:10px" disabled>Commit</button>
                    </div>
                </div>
                <div class="small-9 columns" style="margin-top:20px">
                    <div id="chart-container" style="position:relative;height:500px;"></div>
                </div>
            </div>
        </div>  
        <div>
          <br>
        </div>
    </div>
</template>

<script type="text/javascript">
// import orgchart from '@/assets/jquery.orgchart.js'
// $(function() {

//   var datascource = {
//     'name': 'Beginning',
//     'title': 'Choose Start Video'
//   };

//   var getId = function() {
//     return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
//   };

//   var oc = $('#chart-container').orgchart({
//     'direction': 'l2r',
//     'pan': 'true',
//     'draggable': 'true',
//     'zoom': 'true',
//     'data': datascource,
//     'chartClass': 'edit-state',
//     'nodeContent': 'title',
//     'parentNodeSymbol': 'fa-th-large',
//     'createNode': function($node, data) {
//       $node[0].id = getId();
//     }
//   });

//   oc.$chartContainer.on('click', '.node', function() {
//     var $this = $(this);
//     $('#selected-node').val($this.find('.content').text()).data('node', $this);
//   });

//   oc.$chartContainer.on('click', '.orgchart', function(event) {
//     if (!$(event.target).closest('.node').length) {
//       $('#selected-node').val('');
//     }
//   });

//   $('input[name="chart-state"]').click(function() {
//     if (this.value === 'view'){
//       this.value = 'edit';
//       $('#textfield').attr("disabled",false);
//       $('#select').attr("disabled",false);
//       $('#change').attr("disabled",false);
//       $('#btn-add-nodes').attr("disabled",false);
//       $('#btn-delete-nodes').attr("disabled",false);
//       $('#btn-commit').attr("disabled",false);
//     }
//     else{
//       this.value = 'view';
//       $('#textfield').attr("disabled","disabled");
//       $('#select').attr("disabled","disabled");
//       $('#change').attr("disabled","disabled");
//       $('#btn-add-nodes').attr("disabled","disabled");
//       $('#btn-delete-nodes').attr("disabled","disabled");
//       $('#btn-commit').attr("disabled","disabled");
//     }
//   });

//   // $('input[name="node-type"]').on('click', function() {
//   //   var $this = $(this);
//   //   if ($this.val() === 'parent') {
//   //     $('#edit-panel').addClass('edit-parent-node');
//   //     $('#new-nodelist').children(':gt(0)').remove();
//   //   } else {
//   //     $('#edit-panel').removeClass('edit-parent-node');
//   //   }
//   // });

//   // $('#btn-add-input').on('click', function() {
//   //   $('#new-nodelist').append('<li><input type="text" class="new-node"></li>');
//   // });

//   // $('#btn-remove-input').on('click', function() {
//   //   var inputs = $('#new-nodelist').children('li');
//   //   if (inputs.length > 1) {
//   //     inputs.last().remove();
//   //   }
//   // });


//   $('#change').change(() => {
//     var changetitle = $('#change option:selected').val();
//     var $node = $('#selected-node').data('node');
//     $node.find('.content').text(changetitle);
//     $('#selected-node').val(changetitle);
//   });


//   $('#btn-add-nodes').on('click', function() {
//     var $chartContainer = $('#chart-container');
//     var nodeVals = [];
//     var title = $('#select option:selected').val();

//     $('#new-nodelist').find('.new-node').each(function(index, title) {
//       var validVal1 = title.value.trim();
//       if (validVal1.length) {
//         nodeVals.push(validVal1);
//       }
//     });

//     if (!nodeVals.length) {
//       alert('Please choose branch video')
//       return;
//     }

//     var $node = $('#selected-node').data('node');

//     if (title === null) {
//       alert('Please input branch plot');
//       return;
//     }
//     // var nodeType = $('input[name="node-type"]:checked');
//     // if (!nodeType.length) {
//     //   alert('Please select a node type');
//     //   return;
//     // }
//     // if (nodeType.val() !== 'parent' && !$('.orgchart').length) {
//     //   alert('Please creat the root node firstly when you want to build up the orgchart from the scratch');
//     //   return;
//     // }
//     if (!$node) {
//       alert('Please select one node in orgchart');
//       return;
//     }
//     var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
//     if (!hasChild) {
//       var rel = nodeVals.length > 1 ? '110' : '100';
//       // oc.addChildren($node, function (){
//       //     return { 'title': title, 'relationship': rel, 'id': getId(), 'name': name};
//       // });
//       oc.addChildren($node, nodeVals.map(function (item) {
//           return {'relationship': rel, 'id': getId(), 'name': item, 'title': title};
//         }));
//     } else {
//       // oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), function (){
//       //     return { 'title': title, 'relationship': '110', 'id': getId(), 'name': name};
//       // });
//       oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), nodeVals.map(function (item) {
//           return { 'title': item, 'relationship': '110', 'id': getId(), 'name': item, 'title': title};
//         }));
//     }
//     // if (nodeType.val() === 'parent') {
//     //   if (!$chartContainer.children('.orgchart').length) {// if the original chart has been deleted
//     //     oc = $chartContainer.orgchart({
//     //       'data' : { 'name': nodeVals[0] },
//     //       'exportButton': true,
//     //       'exportFilename': 'SportsChart',
//     //       'parentNodeSymbol': 'fa-th-large',
//     //       'createNode': function($node, data) {
//     //         $node[0].id = getId();
//     //       }
//     //     });
//     //     oc.$chart.addClass('view-state');
//     //   } else {
//     //     oc.addParent($chartContainer.find('.node:first'), { 'name': nodeVals[0], 'id': getId() });
//     //   }
//     // } else if (nodeType.val() === 'siblings') {
//     //   if ($node[0].id === oc.$chart.find('.node:first')[0].id) {
//     //     alert('You are not allowed to directly add sibling nodes to root node');
//     //     return;
//     //   }
//     //   oc.addSiblings($node, nodeVals.map(function (item) {
//     //       return { 'name': item, 'relationship': '110', 'id': getId() };
//     //     }));
//     // } else {
//     //   var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
//     //   if (!hasChild) {
//     //     var rel = nodeVals.length > 1 ? '110' : '100';
//     //     oc.addChildren($node, nodeVals.map(function (item) {
//     //         return { 'name': item, 'relationship': rel, 'id': getId() };
//     //       }));
//     //   } else {
//     //     oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), nodeVals.map(function (item) {
//     //         return { 'name': item, 'relationship': '110', 'id': getId() };
//     //       }));
//     //   }
//     // }
//   });

//   $('#btn-delete-nodes').on('click', function() {
//     var $node = $('#selected-node').data('node');
//     if (!$node) {
//       alert('Please select one node in orgchart');
//       return;
//     } else if ($node[0] === $('.orgchart').find('.node:first')[0]) {
//       alert('You should not delete the root nood');
//       return;
//     }
//     oc.removeNodes($node);
//     $('#selected-node').val('').data('node', null);
//   });


//   $('#btn-commit').on('click', function() {//提交json
//     // $('.orgchart').find('.focused').removeClass('focused');
//     // $('#selected-node').val('');
//     // $('#new-nodelist').find('input:first').val('').parent().siblings().remove();
//     // $('#node-type-panel').find('input').prop('checked', false);
//   });
// });

// export default {
//   name: 'editintervideo',
//   data() {
//     return {

//     }
//   },
//   mounted() {
//     alert(this.$route.query.interVideoID)
//   },
//   methods: {
//     getVideoList(){
//     },
//     postJson(){
      
//     }
//   }
// }
</script>
