import * as d3 from 'd3'

const mainSpinner = (refSpinner, refResult, refSpin, data=[
  {
    label: 'SUZUKI',
    value: 1,
  },
  {
    label: 'FERRARI',
    value: 2,
  },
  {
    label: 'IPAD PRO',
    value: 3,
  },
  {
    label: 'AMJAD',
    value: 4,
  },
  {
    label: 'AJAY',
    value: 5,
  },
]) => {
  let padding = { top: 20, right: 0, bottom: 0, left: 0 },
    w = 300 - padding.left - padding.right,
    h = 300 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.schemeSet3
  const spinAllow = refSpin
  
  let svg = d3
    .select(refSpinner)
    .append('svg')
    .data([data])
    .attr('width', w + padding.left + padding.right)
    .attr('height', h + padding.top + padding.bottom)
  let container = svg
    .append('g')
    .attr('class', 'spinnerHolder')
    .attr(
      'transform',
      'translate(' + (w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')'
    )
  let vis = container.append('g')

  let pie = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return 1
    })
  // declare an arc generator function
  let arc = d3
    .arc()
    .outerRadius(r)
    .innerRadius(0)
  // select paths, use arc generator to draw
  let arcs = vis
    .selectAll('g.slice')
    .data(pie)
    .enter()
    .append('g')
    .attr('class', 'slice')

  arcs
    .append('path')
    .attr('fill', function(d, i) {
      return color[i]
    })
    .attr('d', function(d) {
      return arc(d)
    })
  // add the text
  arcs
    .append('text')
    .attr('transform', function(d) {
      d.innerRadius = 0
      d.outerRadius = r
      d.angle = (d.startAngle + d.endAngle) / 2
      return (
        'rotate(' +
        ((d.angle * 180) / Math.PI - 90) +
        ')translate(' +
        (d.outerRadius - 10) +
        ')'
      )
    })
    .attr('text-anchor', 'end')
    .text(function(d, i) {
      return data[i].label
    })
  let spinCount = 0;
  container.on('click', spin)
  function spin(d) {
    container.on('click', null)
    spinCount = spinCount + 1;
    // console.log(spinCount);
    if (spinAllow >= spinCount) {
      // console.log('OldPick: ' + oldpick.length, 'Data length: ' + data.length)
      
      //all slices have been seen, all done
      if (oldpick.length === data.length) {
        container.on('click', null)
        return
      }
      var ps = 360 / data.length,
        //pieslice = Math.round(1440 / data.length),
        rng = Math.floor(Math.random() * 1440 + 360)
  
      rotation = Math.round(rng / ps) * ps
  
      picked = Math.round(data.length - (rotation % 360) / ps)
      picked = picked >= data.length ? picked % data.length : picked
      if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin)
        return
      } else {
        oldpick.push(picked)
      }
      rotation += 90 - Math.round(ps / 2)
      vis
        .transition()
        .duration(5000)
        .attrTween('transform', rotTween)
        .on('end', function() {
          //mark question as seen
          d3.select('.slice:nth-child(' + (picked + 1) + ') path').attr(
            'fill',
            '#eee'
          )
          //populate question
          d3.select(refResult).text(data[picked].label)
          oldrotation = rotation
          /* Comment the below line for restrict spin to single time */
          container.on('click', spin)

          spinningComplete(data[picked]);
        })
    }
  }
  //make arrow
  svg
    .append('g')
    .attr(
      'transform',
      'translate(' +
        (190) +
        ',' +
        (h / 2 + padding.top) +
        ')'
    )
    .append('path')
    .attr('d', 'M-' + 80 * 0.15 + ',-9L-12, 9L9, -0Z10')
    .attr('fill', '#fff')
  // .style({ fill: 'black' })
  //draw spin circle
  container
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 30)
    .attr('onClick', 'this.spinbtn')
    .attr('fill', 'white')
    .attr('cursor', 'pointer')
  // .style({ fill: 'white', cursor: 'pointer' })
  //spin text
  container
    .append('text')
    .attr('x', 0)
    .attr('y', 7)
    .attr('text-anchor', 'middle')
    .text('SPIN')
    .attr('font-weight', 'bold')
    .attr('font-size', '14px')
    .attr('cursor', 'pointer')
  // .style({ 'font-weight': 'bold', 'font-size': '30px' })

  function rotTween(to) {
    let i = d3.interpolate(oldrotation % 360, rotation)
    return function(t) {
      return 'rotate(' + i(t) + ')'
    }
  }

  //function will be call when Spinner will be stopped spinning
  function spinningComplete(resultObj){
    //change as you need
    // console.log(resultObj);
  }
  
}

export default mainSpinner
