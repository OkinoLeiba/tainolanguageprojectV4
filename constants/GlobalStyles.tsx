'use strict'
import {StyleSheet} from 'react-native';
import COLORS from './Colors';




export default StyleSheet.create({
    CONTAINER: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
        padding: 8,
    },
    TEXT: {
        color:  COLORS.BLACK,
        textAlign: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
    //     fontWeight: 'normal',
    //     lineHeight: 0, 
    //     letterSpacing: 0,
    //     fontSize: 0,
    },
    HEADING_1: {
        /* Heading 1 */
        fontFamily: 'Inter',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 30,
        color: COLORS.ON_BACKGROUND_HIGH_EMPHASIS,
    },
    BUTTON_WRAPPER: {
        display: 'flex',
        width: 'auto',
        position: 'absolute',
        bottom: 20,
        paddingVertical: 0,
        paddingHorizontal: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    BUTTON_NAV: {
        display: 'flex',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        alignSelf: 'stretch',
        borderRadius: 8,
      },
      BUTTON_TEXT: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 16,
      },

      CARD_TEXT: {
        position: 'relative',
        // left: 0, 
        color: '#1D1D1D',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 18,
      }
      
})