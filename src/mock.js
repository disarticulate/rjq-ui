import 'leonardojs'

window.Leonardo.addStates([
  {
    name: 'Get Queues',
    url: 'rjq-api/queues$',
    verb: 'GET',
    options: [
      {
        name: 'success',
        status: 200,
        data: [
          {
            name: 'Registration Emails',
            waiting: 1,
            active: 0,
            completed: 0,
            cancelled: 0,
            failed: 0,
            terminated: 0,
            total: 1
          },
          {
            name: 'Document Crawling',
            waiting: 129,
            active: 1,
            completed: 0,
            cancelled: 0,
            failed: 0,
            terminated: 0,
            total: 130
          }
        ]
      },
      { name: 'error 500', status: 500 },
      { name: 'error 401', status: 401 }
    ]
  },
  {
    name: 'Get Jobs',
    url: 'rjq-api/queues/*',
    verb: 'GET',
    options: [
      {
        name: 'success',
        status: 200,
        data: [
          {
            status: 'waiting',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            timeout: 300000
          },
          {
            status: 'waiting',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            data: {
              title: 'Nice Job',
              source: 'booooom'
            },
            timeout: 300000
          },
          {
            status: 'active',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            data: {
              title: 'Nice Job',
              source: 'booooom'
            },
            timeout: 300000
          },
          {
            status: 'active',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            data: {
              title: 'Nice Job',
              source: 'booooom'
            },
            timeout: 300000
          },
          {
            status: 'completed',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            data: {
              title: 'Nice Job',
              source: 'booooom'
            },
            timeout: 300000
          },
          {
            status: 'completed',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            data: {
              title: 'Nice Job',
              source: 'booooom'
            },
            timeout: 300000
          },
          {
            status: 'completed',
            id: '0d1e465f-0c38-40b3-a62e-64f57c279015',
            name: 'booooom',
            priority: 40,
            processCount: 210,
            progress: 0,
            queueId: 'd264f118-fff4-4a9c-8710-3c8c566cc089:JobQueue:crawel_sources:23:b4030bfe-8f2e-4ad6-962c-df5482453f83',
            repeat: true,
            repeatDelay: 300000,
            retryCount: 0,
            retryDelay: 60000,
            retryMax: 3,
            dateCreated: new Date(),
            dateEnable: new Date(),
            dateFinished: new Date(),
            dateStarted: new Date(),
            title: 'a',
            data: {
              title: 'Nice Job',
              source: 'booooom'
            },
            timeout: 300000
          }
        ]
      },
      { name: 'error 500', status: 500 },
      { name: 'error 401', status: 401 }
    ]
  }
])

window.Leonardo.activateStateOption('Get Queues', 'success')
window.Leonardo.activateStateOption('Get Jobs', 'success')
