import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin'

describe( 'plugins/logger.plugin', () => {
  test( 'should logger call', () => {
    const log = buildLogger( 'test' )
    // console.log( buildLogger );
    expect( typeof log.log ).toBe( 'function' )
    expect( typeof log.error ).toBe( 'function' )

  } )

  test( 'should log a message', () => {
    const winstonLoggerMock = jest.spyOn( winstonLogger, 'log' )

    const message = 'test message'
    const service = 'test service'

    const logger = buildLogger( service )
    logger.log( message )

    expect( winstonLoggerMock ).toHaveBeenCalledWith(
      'info',
      expect.objectContaining( {
        level: 'info',
        message,
        service
      } )
    )
  } )
} )