/******************************************************************************\
# JS - PARALAX_EFFECT                            #       Maximum Tension       #
################################################################################
#                                                #      -__            __-     #
# Teoman Deniz                                   #  :    :!1!-_    _-!1!:    : #
# maximum-tension.com                            #  ::                      :: #
#                                                #  :!:    : :: : :  :  ::::!: #
# +.....................++.....................+ #   :!:: :!:!1:!:!::1:::!!!:  #
# : C - Maximum Tension :: Create - 2024/10/12 : #   ::!::!!1001010!:!11!!::   #
# :---------------------::---------------------: #   :!1!!11000000000011!!:    #
# : License - MIT       :: Update - 2024/02/03 : #    ::::!!!1!!1!!!1!!!::     #
# +.....................++.....................+ #       ::::!::!:::!::::      #
\******************************************************************************/

var WINDOW_CENTER_X = window.innerWidth / 2;
var WINDOW_CENTER_Y = window.innerHeight / 2;

window.addEventListener('resize',
	function ()
	{
		WINDOW_CENTER_X = window.innerWidth / 2;
		WINDOW_CENTER_Y = window.innerHeight / 2;
	}
);

function
	PARALAX_EFFECT(ELEMENT, FRICTION, SENSITIVITY)
{
	function
		UPDATE_MAIN_PANEL_POSITION(THIS)
	{
		const TARGET_X = (THIS.MOUSE_X - WINDOW_CENTER_X) * THIS.SENSITIVITY;
		const TARGET_Y = (THIS.MOUSE_Y - WINDOW_CENTER_Y) * THIS.SENSITIVITY;

		THIS.MENU_POSITION_X =
			LERP(THIS.THIS.MENU_POSITION_X, TARGET_X, THIS.FRICTION);
		THIS.MENU_POSITION_Y =
			LERP(THIS.MENU_POSITION_Y, TARGET_Y, THIS.FRICTION);
		THIS.MOVING_OBJECT.style.transform =
			"TRANSLATE(" + THIS.MENU_POSITION_X + "PX, " +
			THIS.MENU_POSITION_Y + "PX)";
		requestAnimationFrame(() => UPDATE_MAIN_PANEL_POSITION(THIS));
	}

	const THIS = {};

	THIS.MOVING_OBJECT = ELEMENT;
	THIS.MOUSE_X = WINDOW_CENTER_X;
	THIS.MOUSE_Y = WINDOW_CENTER_Y;
	THIS.MENU_POSITION_X = 0;
	THIS.MENU_POSITION_Y = 0;
	THIS.FRICTION = FRICTION || 0.05;
	THIS.SENSITIVITY = SENSITIVITY || 0.01;
	requestAnimationFrame(() => UPDATE_MAIN_PANEL_POSITION(THIS));
}
